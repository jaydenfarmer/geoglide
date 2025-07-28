import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../../models/city.model';
import {
  TIMEZONE_FULLNAME,
  TIMEZONE_OFFSET,
} from '../../models/timezone-full-map';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() city: City | null = null;
  @Input() position: { x: number; y: number } = { x: 0, y: 0 };
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() positionChange = new EventEmitter<{ x: number; y: number }>();

  @ViewChild('tooltip', { static: false }) tooltipRef!: ElementRef;

  currentTime: string = '';
  currentDate: string = '';
  private timeInterval: any;

  ngOnDestroy() {
    this.stopTimeUpdates();
  }

  ngOnInit() {
    this.startTimeUpdates();
  }

  ngOnChanges() {
    if (this.city) {
      this.updateTime();
    }
  }

  getTimezoneFullName(): string {
    if (!this.city) {
      return '';
    }
    return TIMEZONE_FULLNAME[this.city.timezone] || this.city.timezone;
  }

  getTimezoneOffset(): string {
    if (!this.city) {
      return '';
    }
    const offset = TIMEZONE_OFFSET[this.city.timezone];
    if (offset > 0) {
      return `+${offset}`;
    } else if (offset < 0) {
      return `${offset}`;
    } else {
      return '0';
    }
  }

  private startTimeUpdates() {
    this.updateTime();
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private stopTimeUpdates() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime() {
    if (!this.city) return;

    try {
      const now = new Date();

      // Format time
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: this.city.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      this.currentTime = timeFormatter.format(now);

      // Format date
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: this.city.timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      this.currentDate = dateFormatter.format(now);
    } catch (error) {
      this.currentTime = 'Time unavailable';
      this.currentDate = '';
    }
  }
}
