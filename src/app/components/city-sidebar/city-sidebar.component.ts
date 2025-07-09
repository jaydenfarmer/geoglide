import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { City } from '../../models/city.model';
import { CITIES } from '../../models/city-list';
import { CityCardComponent } from '../city-card/city-card.component';
import { TimezoneService } from '../../services/timezone.service';

@Component({
  selector: 'app-city-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, CityCardComponent],
  templateUrl: './city-sidebar.component.html',
  styleUrl: './city-sidebar.component.css',
})
export class CitySidebarComponent implements OnInit {
  @Input() selectedCity: City | null = null;
  @Output() citySelected = new EventEmitter<City>();
  @Output() displayedCitiesChanged = new EventEmitter<City[]>();

  constructor(private timezoneService: TimezoneService) {}

  searchTerm: string = '';

  // Default 5 major cities to always show
  majorCities: City[] = [
    CITIES.find((c) => c.name === 'New York')!,
    CITIES.find((c) => c.name === 'London')!,
    CITIES.find((c) => c.name === 'Tokyo')!,
    CITIES.find((c) => c.name === 'Dubai')!,
    CITIES.find((c) => c.name === 'Sydney')!,
  ];

  // Cities currently displayed in sidebar
  displayedCities: City[] = [...this.majorCities];

  // Filtered search results
  searchResults: City[] = [];

  ngOnInit() {
    // Emit initial cities
    this.displayedCitiesChanged.emit(this.displayedCities);
  }

  onSearch() {
    if (this.searchTerm.trim().length < 2) {
      this.searchResults = [];
      return;
    }

    // Filter cities based on search term
    this.searchResults = CITIES.filter(
      (city) =>
        city.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        !this.displayedCities.some((displayed) => displayed.name === city.name)
    );
  }

  addCityToSidebar(city: City) {
    // Add city to displayed list if not already there
    if (
      !this.displayedCities.some((displayed) => displayed.name === city.name)
    ) {
      this.displayedCities.push(city);
      this.displayedCitiesChanged.emit(this.displayedCities);
    }

    // Clear search
    this.searchTerm = '';
    this.searchResults = [];

    // Select the city
    this.selectCity(city);
  }

  removeCityFromSidebar(city: City) {
    // Don't allow removing major cities
    if (this.majorCities.some((major) => major.name === city.name)) {
      return;
    }

    this.displayedCities = this.displayedCities.filter(
      (c) => c.name !== city.name
    );
    this.displayedCitiesChanged.emit(this.displayedCities);
  }

  selectCity(city: City) {
    this.citySelected.emit(city);
  }

  getCityCountry(timezone: string): string {
    return this.timezoneService.getCountryFromTimezone(timezone);
  }

  isMajorCity(city: City): boolean {
    return this.majorCities.some((major) => major.name === city.name);
  }

  clearSearch() {
    this.searchTerm = '';
    this.searchResults = [];
  }

  trackByCity(index: number, city: City): string {
    return city.name;
  }
}
