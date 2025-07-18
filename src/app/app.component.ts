import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { City } from './models/city.model';
import { GlobeComponent } from './components/globe/globe.component';
import { CitySidebarComponent } from './components/city-sidebar/city-sidebar.component';
import { TimezoneService } from '../app/services/timezone.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, GlobeComponent, CitySidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('sidebarSlide', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        })
      ),
      transition('closed => open', [
        animate('300ms cubic-bezier(0.4,0,0.2,1)'),
      ]),
      transition('open => closed', [
        animate('200ms cubic-bezier(0.4,0,0.2,1)'),
      ]),
    ]),
  ],
})
export class AppComponent {
  selectedCity: City | null = null;
  displayedCities: City[] = [];
  isMobile = false;
  sidebarOpen = false;

  constructor(
    private timezoneService: TimezoneService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
    this.cdr.detectChanges();
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) this.sidebarOpen = false;
  }

  onCitySelected(city: City) {
    this.selectedCity = city;
  }

  onGlobeCitySelected(city: City) {
    this.selectedCity = city;
  }

  onDisplayedCitiesChanged(cities: City[]) {
    this.displayedCities = cities;
  }

  getCityCountry(timezone: string): string {
    return this.timezoneService.getCountryFromTimezone(timezone);
  }
}
