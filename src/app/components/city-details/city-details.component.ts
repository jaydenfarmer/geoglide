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

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [CommonModule],
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

  private isDragging = false;
  private dragOffset = { x: 0, y: 0 };

  currentTime: string = '';
  currentDate: string = '';
  private timeInterval: any;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.dragOffset = {
      x: event.clientX - this.position.x,
      y: event.clientY - this.position.y,
    };

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    event.preventDefault();
  }

  onMouseMove = (event: MouseEvent) => {
    if (this.isDragging) {
      const newPosition = {
        x: event.clientX - this.dragOffset.x,
        y: event.clientY - this.dragOffset.y,
      };
      this.positionChange.emit(newPosition);
    }
  };

  onMouseUp = () => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
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
