import { Component, EventEmitter, Output } from '@angular/core';
import { CITIES } from '../../models/city-list';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css'
})
export class CitySelectorComponent {
  cities = CITIES;

  @Output() citySelected = new EventEmitter<City>();

  selectCityFromEvent(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTimezone = selectElement.value;
    
    if (selectedTimezone) {
      const city = this.cities.find(c => c.timezone === selectedTimezone);
      if (city) {
        this.citySelected.emit(city);
      }
    }
  }
}
