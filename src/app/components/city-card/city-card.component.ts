import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../../models/city.model';
import { TimezoneService } from '../../services/timezone.service';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css'],
})
export class CityCardComponent implements OnInit, OnDestroy {
  @Input() city!: City;
  @Input() isSelected: boolean = false;
  @Input() isMajorCity: boolean = false;
  @Input() showRemoveButton: boolean = true;
  @Output() cityClick = new EventEmitter<City>();
  @Output() removeClick = new EventEmitter<City>();

  constructor(private timezoneService: TimezoneService) {}

  currentTime: string = '';
  private timeInterval: any;

  ngOnInit() {
    this.startTimeUpdates();
  }

  ngOnDestroy() {
    this.stopTimeUpdates();
  }

  onCityClick() {
    this.cityClick.emit(this.city);
  }

  onRemoveClick(event: Event) {
    event.stopPropagation();
    this.removeClick.emit(this.city);
  }

  getCityCountry(timezone: string): string {
    return this.timezoneService.getCountryFromTimezone(timezone);
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
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: this.city.timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      this.currentTime = timeFormatter.format(now);
    } catch (error) {
      this.currentTime = '--:--';
    }
  }
}
