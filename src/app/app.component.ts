import { Component, OnDestroy } from '@angular/core';
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
})
export class AppComponent {
  selectedCity: City | null = null;
  displayedCities: City[] = [];
  isMobile = false;
  sidebarOpen = false;

  constructor(private timezoneService: TimezoneService) {}

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
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
