import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
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
  animations: [
    // Animation for individual city cards
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),

    // Animation for the entire list (when multiple items are added/removed)
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            stagger(
              100,
              animate(
                '300ms ease-out',
                style({ transform: 'translateX(0%)', opacity: 1 })
              )
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger(
              50,
              animate(
                '300ms ease-in',
                style({ transform: 'translateX(-100%)', opacity: 0 })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
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
      this.displayedCities = [...this.displayedCities, city]; // Create new array for animation
      this.displayedCitiesChanged.emit(this.displayedCities);
    }

    // Clear search
    this.searchTerm = '';
    this.searchResults = [];

    // Select the city
    this.selectCity(city);
  }

  removeCityFromSidebar(city: City) {
    console.log('Removing city:', city);

    // Don't allow removing major cities
    if (this.isMajorCity(city)) {
      console.log('Cannot remove major city:', city.name);
      return;
    }

    // Remove the city from the array (create new array for animation)
    this.displayedCities = this.displayedCities.filter(
      (c) => c.name !== city.name
    );

    console.log('Cities after removal:', this.displayedCities);

    // Emit the updated list
    this.displayedCitiesChanged.emit(this.displayedCities);

    // If we're removing the currently selected city, clear selection
    if (this.selectedCity?.name === city.name) {
      this.citySelected.emit(undefined);
    }
  }

  selectCity(city: City) {
    this.citySelected.emit(city);
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

  getCityCountry(timezone: string): string {
    return this.timezoneService.getCountryFromTimezone(timezone);
  }
}
