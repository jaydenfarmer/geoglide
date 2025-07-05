import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { City } from './models/city.model';
import { TimeDisplayComponent } from "./components/time-display/time-display.component";
import { GlobeComponent } from "./components/globe/globe.component";
import { CitySidebarComponent } from "./components/city-sidebar/city-sidebar.component";
import { TimezoneService } from '../app/services/timezone.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TimeDisplayComponent, GlobeComponent, CitySidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedCity: City | null = null;
  displayedCities: City[] = [];

  constructor(private timezoneService: TimezoneService) {}

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