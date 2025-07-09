import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() city: City | null = null;
  @Input() position: { x: number, y: number } = { x: 0, y: 0 };
  @Input() visible: boolean = false;

  currentTime: string = '';
  currentDate: string = '';
  private timeInterval: any;

  ngOnInit() {
    this.startTimeUpdates();
  }

  ngOnDestroy() {
    this.stopTimeUpdates();
  }

  ngOnChanges() {
    if (this.city) {
      this.updateTime();
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
        hour12: true
      });
      this.currentTime = timeFormatter.format(now);

      // Format date
      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: this.city.timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      this.currentDate = dateFormatter.format(now);
      
    } catch (error) {
      this.currentTime = 'Time unavailable';
      this.currentDate = '';
    }
  }
}