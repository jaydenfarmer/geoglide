import {
  Component,
  NgZone,
  OnDestroy,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { City } from '../../models/city.model';
import { CityDetailsComponent } from '../city-details/city-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-globe',
  standalone: true,
  imports: [CityDetailsComponent, CommonModule],
  templateUrl: './globe.component.html',
  styleUrl: './globe.component.css',
})
export class GlobeComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() lat: number = 0;
  @Input() lon: number = 0;
  @Input() selectedCityId: string | null = null;
  @Input() displayedCities: City[] = [];
  @Output() citySelected = new EventEmitter<City>();

  private root!: am5.Root;
  private chart!: am5map.MapChart;
  private pointSeries!: am5map.MapPointSeries;
  private allCitiesPointSeries!: am5map.MapPointSeries;

  // Tooltip properties
  hoveredCity: City | null = null;
  selectedCity: City | null = null;
  tooltipPosition = { x: 0, y: 0 };
  showTooltip = false;
  showCityName = false;
  cityNamePosition = { x: 0, y: 0 };
  private lastTooltipPosition = { x: window.innerWidth / 2 + 40, y: 50 };
  draggableTooltipPosition = { x: 0, y: 0 };

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(async () => {
      // Lazy load amCharts modules with proper typing
      const [am5Module, am5mapModule, worldLowModule, animatedThemeModule] =
        await Promise.all([
          import('@amcharts/amcharts5'),
          import('@amcharts/amcharts5/map'),
          import('@amcharts/amcharts5-geodata/worldLow'),
          import('@amcharts/amcharts5/themes/Animated'),
        ]);

      // Extract the actual exports
      const am5 = am5Module;
      const am5map = am5mapModule;
      const am5geodata_worldLow = worldLowModule.default;
      const am5themes_Animated = animatedThemeModule.default;

      // Create root
      this.root = am5.Root.new('globeDiv');

      // Set themes
      this.root.setThemes([am5themes_Animated.new(this.root)]);

      // Create the map chart
      this.chart = this.root.container.children.push(
        am5map.MapChart.new(this.root, {
          panX: 'rotateX',
          panY: 'rotateY',
          projection: am5map.geoOrthographic(),
        })
      );

      // Create main polygon series for countries
      var polygonSeries = this.chart.series.push(
        am5map.MapPolygonSeries.new(this.root, {
          geoJSON: am5geodata_worldLow, // Now properly typed
        })
      );

      // Rest of your existing code...
      polygonSeries.mapPolygons.template.setAll({
        tooltipText: '{name}',
        toggleKey: 'active',
        interactive: true,
      });

      polygonSeries.mapPolygons.template.states.create('hover', {
        fill: this.root.interfaceColors.get('primaryButtonHover'),
      });

      // Create series for background fill
      var backgroundSeries = this.chart.series.push(
        am5map.MapPolygonSeries.new(this.root, {})
      );
      backgroundSeries.mapPolygons.template.setAll({
        fill: this.root.interfaceColors.get('alternativeBackground'),
        fillOpacity: 0.1,
        strokeOpacity: 0,
      });
      backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180),
      });

      // Create graticule series
      var graticuleSeries = this.chart.series.push(
        am5map.GraticuleSeries.new(this.root, {})
      );
      graticuleSeries.mapLines.template.setAll({
        strokeOpacity: 0.1,
        stroke: this.root.interfaceColors.get('alternativeBackground'),
      });

      // Create small pins for all cities
      this.allCitiesPointSeries = this.chart.series.push(
        am5map.MapPointSeries.new(this.root, {})
      );

      // Style the small city pins
      this.allCitiesPointSeries.bullets.push((root, series, dataItem) => {
        const cityData = dataItem.dataContext as any;
        const isSelected = this.selectedCityId === cityData.name;

        const bullet = am5.Bullet.new(this.root, {
          sprite: am5.Circle.new(this.root, {
            radius: isSelected ? 6 : 4,
            fill: am5.color(isSelected ? 0xe74c3c : 0x00098e),
            stroke: am5.color(0xffffff),
            strokeWidth: isSelected ? 2 : 1,
            cursorOverStyle: 'pointer',
          }),
        });

        // Set tooltip with THIS city's name
        bullet.get('sprite')!.set('tooltipText', cityData.name);

        // Remove hover events, only keep click
        bullet.get('sprite')!.events.on('click', () => {
          const city = this.displayedCities.find(
            (c) => c.name === cityData.name
          );
          if (city) {
            this.citySelected.emit(city);
          }
        });

        return bullet;
      });

      // Add initial city pins
      this.updateCityPins();

      // Rotate animation
      this.chart.animate({
        key: 'rotationX',
        from: 0,
        to: 360,
        duration: 30000,
        loops: Infinity,
      });

      // Make stuff animate on load
      this.chart.appear(1000, 100);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Update pins when displayed cities change
    if (changes['displayedCities'] && this.chart) {
      this.updateCityPins();
    }

    // Update selection state when selectedCityId changes
    if (changes['selectedCityId'] && this.chart) {
      this.updateCityPins(); // Refresh pins to show new selection state

      // Show tooltip for selected city
      if (this.selectedCityId) {
        this.selectedCity =
          this.displayedCities.find((c) => c.name === this.selectedCityId) ||
          null;
        // In ngOnChanges, set initial draggable position
        if (this.selectedCity) {
          this.hoveredCity = this.selectedCity;
          this.showTooltip = true;
          this.draggableTooltipPosition = { ...this.lastTooltipPosition };
        }
      } else {
        this.selectedCity = null;
        this.showTooltip = false;
        this.hoveredCity = null;
      }
    }

    // Rotate to city when lat/lon changes
    if ((changes['lat'] || changes['lon']) && this.chart) {
      this.rotateToCity();
    }
  }

  // Add these methods to handle city name hover
  onCityNameHover(event: MouseEvent) {
    if (this.selectedCity) {
      this.hoveredCity = this.selectedCity;
      this.showTooltip = true;
    }
  }

  // Update the tooltip position handler
  onTooltipPositionChange(newPosition: { x: number; y: number }) {
    this.draggableTooltipPosition = newPosition;
    this.lastTooltipPosition = { ...newPosition }; // Remember this position
  }

  onCityNameLeave() {
    this.showTooltip = false;
    this.hoveredCity = null;
  }

  // Keep existing onTooltipClose method
  onTooltipClose() {
    this.showTooltip = false;
    this.hoveredCity = null;
  }

  // New method to update pins based on displayed cities
  private updateCityPins() {
    if (!this.allCitiesPointSeries) return;

    // Clear existing pins
    this.allCitiesPointSeries.data.setAll([]);

    // Add pins only for cities in sidebar
    const cityData = this.displayedCities.map((city) => ({
      geometry: { type: 'Point', coordinates: [city.lng, city.lat] },
      name: city.name,
      lat: city.lat,
      lng: city.lng,
      timezone: city.timezone,
    }));

    this.allCitiesPointSeries.data.setAll(cityData);
  }

  private rotateToCity() {
    if (!this.chart || !this.selectedCityId) return;

    const currentX = this.chart.get('rotationX') || 0;
    const currentY = this.chart.get('rotationY') || 0;

    const targetX = -this.lon;
    const targetY = -this.lat;

    // Helper function for shortest rotation path with proper wrapping
    const getShortestPath = (from: number, to: number): number => {
      // Normalize both angles to -180 to 180 range for comparison
      const normalizeAngle = (angle: number) => {
        return ((angle + 180) % 360) - 180;
      };

      const normalizedFrom = normalizeAngle(from);
      const normalizedTo = normalizeAngle(to);

      // Calculate the shortest difference
      let diff = normalizedTo - normalizedFrom;

      // Ensure we take the shortest path
      if (diff > 180) {
        diff -= 360;
      } else if (diff < -180) {
        diff += 360;
      }

      // Apply the difference to the original 'from' value
      return from + diff;
    };

    const finalX = getShortestPath(currentX, targetX);
    const finalY = getShortestPath(currentY, targetY);

    this.chart.animate({
      key: 'rotationX',
      to: finalX,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic),
    });

    this.chart.animate({
      key: 'rotationY',
      to: finalY,
      duration: 1000,
      easing: am5.ease.out(am5.ease.cubic),
    });
  }

  ngOnDestroy() {
    this.root?.dispose();
  }
}
