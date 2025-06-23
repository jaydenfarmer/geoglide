import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { City } from './models/city.model';
import { CITIES } from './models/city-list';
import { CitySelectorComponent } from "./components/city-selector/city-selector.component";
import { TimeDisplayComponent } from "./components/time-display/time-display.component";
import { GlobeComponent } from "./components/globe/globe.component";
import { CitySidebarComponent } from "./components/city-sidebar/city-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CitySelectorComponent, TimeDisplayComponent, GlobeComponent, CitySidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  selectedCity: City | null = null;
  isAutoRotating: boolean = false;
  private autoRotateInterval: any;

  onCitySelected(city: City) {
    this.selectedCity = city;
    // Stop auto-rotate when user manually selects a city
    this.stopAutoRotate();
  }
  
  onGlobeCitySelected(city: City) {
    this.selectedCity = city;
  }

  toggleAutoRotate() {
    if (this.isAutoRotating) {
      this.stopAutoRotate();
    } else {
      this.startAutoRotate();
    }
  }

  startAutoRotate() {
    this.isAutoRotating = true;
    this.selectRandomCity(); // Start with a random city immediately
    
    this.autoRotateInterval = setInterval(() => {
      this.selectRandomCity();
    }, 5000);
  }

  stopAutoRotate() {
    this.isAutoRotating = false;
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  selectRandomCity() {
    const randomIndex = Math.floor(Math.random() * CITIES.length);
    this.selectedCity = CITIES[randomIndex];
  }

  ngOnDestroy() {
    this.stopAutoRotate();
  }
}