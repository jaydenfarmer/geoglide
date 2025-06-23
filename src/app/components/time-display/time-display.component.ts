import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-time-display',
  standalone: true,
  imports: [],
  templateUrl: './time-display.component.html',
  styleUrl: './time-display.component.css',
})
export class TimeDisplayComponent implements OnChanges, OnDestroy {
  @Input() timezone: string = '';
  time = '';
  intervalId: any;

  constructor(private timeService: TimeService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['timezone']) {
      this.startClock();
    }
  }

  startClock() {
    clearInterval(this.intervalId);
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    // Get the current time for the selected timezone
    const now = new Date();
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: this.timezone }));
    
    // Update digital time display
    this.time = this.timeService.getTimeForTimezone(this.timezone);
    
    // Get time components
    const hours = cityTime.getHours();
    const minutes = cityTime.getMinutes();
    const seconds = cityTime.getSeconds();
    
    // Calculate degrees for clock hands
    const secondDeg = ((seconds / 60) * 360);
    const minuteDeg = ((minutes / 60) * 360);
    const hourDeg = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30); // Include minute offset for smoother hour hand
    
    // Update the clock hands
    this.updateClockHands(hourDeg, minuteDeg, secondDeg);
    
    // Update the digital time display inside the clock
    this.updateDigitalDisplay(hours, minutes, seconds);
  }

  updateClockHands(hourDeg: number, minuteDeg: number, secondDeg: number) {
    const hourHand = document.querySelector('.hourHand') as HTMLElement;
    const minuteHand = document.querySelector('.minuteHand') as HTMLElement;
    const secondHand = document.querySelector('.secondHand') as HTMLElement;
    
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    if (secondHand) secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }

  updateDigitalDisplay(hours: number, minutes: number, seconds: number) {
    const timeDisplay = document.querySelector('.time') as HTMLElement;
    if (timeDisplay) {
      timeDisplay.innerHTML = `<span><strong>${hours.toString().padStart(2, '0')}</strong> : ${minutes.toString().padStart(2, '0')} : <small>${seconds.toString().padStart(2, '0')}</small></span>`;
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}