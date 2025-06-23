import { Component, NgZone, OnDestroy, AfterViewInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { CITIES } from '../../models/city-list';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-globe',
  standalone: true,
  imports: [],
  templateUrl: './globe.component.html',
  styleUrl: './globe.component.css'
})
export class GlobeComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() lat: number = 0;
  @Input() lon: number = 0;
  @Input() selectedCityId: string | null = null;
  @Output() citySelected = new EventEmitter<City>();

  private root!: am5.Root;
  private chart!: am5map.MapChart;
  private pointSeries!: am5map.MapPointSeries;
  private allCitiesPointSeries!: am5map.MapPointSeries;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create root
      this.root = am5.Root.new("globeDiv");

      // Set themes
      this.root.setThemes([
        am5themes_Animated.new(this.root)
      ]);

      // Create the map chart
      this.chart = this.root.container.children.push(am5map.MapChart.new(this.root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoOrthographic()
      }));

      // Create main polygon series for countries
      var polygonSeries = this.chart.series.push(am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow
      }));

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true
      });

      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: this.root.interfaceColors.get("primaryButtonHover")
      });

      // Create series for background fill
      var backgroundSeries = this.chart.series.push(am5map.MapPolygonSeries.new(this.root, {}));
      backgroundSeries.mapPolygons.template.setAll({
        fill: this.root.interfaceColors.get("alternativeBackground"),
        fillOpacity: 0.1,
        strokeOpacity: 0
      });
      backgroundSeries.data.push({
        geometry: am5map.getGeoRectangle(90, 180, -90, -180)
      });

      // Create graticule series
      var graticuleSeries = this.chart.series.push(am5map.GraticuleSeries.new(this.root, {}));
      graticuleSeries.mapLines.template.setAll({ 
        strokeOpacity: 0.1, 
        stroke: this.root.interfaceColors.get("alternativeBackground") 
      });

      // Create small pins for all cities
      this.allCitiesPointSeries = this.chart.series.push(
        am5map.MapPointSeries.new(this.root, {})
      );

      // Style the small city pins
      this.allCitiesPointSeries.bullets.push((root, series, dataItem) => {
        // Get the specific city data for THIS bullet
        const cityData = dataItem.dataContext as any;
        
        const bullet = am5.Bullet.new(this.root, {
          sprite: am5.Circle.new(this.root, {
            radius: 3,
            fill: am5.color(0x00098e),
            stroke: am5.color(0xffffff),
            strokeWidth: 1,
            cursorOverStyle: "pointer"
          })
        });

        // Set tooltip with THIS city's name
        bullet.get("sprite")!.set("tooltipText", cityData.name);

        // Add click event with THIS city's data
        bullet.get("sprite")!.events.on("click", () => {
          // Find the city object by name
          const city = CITIES.find(c => c.name === cityData.name);
          if (city) {
            
            // Update the internal lat/lon values
            this.lat = city.lat;
            this.lon = city.lng;
            
            // Call updateMarker directly
            this.updateMarker();
            
            // Then emit the event
            this.citySelected.emit(city);
          }
        });

        return bullet;
      });


      // Create selected city marker (larger)
      this.pointSeries = this.chart.series.push(
        am5map.MapPointSeries.new(this.root, {})
      );

      // Style the selected city marker
      this.pointSeries.bullets.push(() => {
        return am5.Bullet.new(this.root, {
          sprite: am5.Circle.new(this.root, {
            radius: 8,
            fill: am5.color(0xe74c3c), // Red marker for selected city
            stroke: am5.color(0xffffff),
            strokeWidth: 2
          })
        });
      });

      // Add all cities as small pins
      this.addAllCityPins();

      // Rotate animation
      this.chart.animate({
        key: "rotationX",
        from: 0,
        to: 360,
        duration: 30000,
        loops: Infinity
      });

      // Make stuff animate on load
      this.chart.appear(1000, 100);
    });
  }

  private addAllCityPins() {
    // Add all cities as small blue pins
    const cityData = CITIES.map(city => ({
      geometry: { type: "Point", coordinates: [city.lng, city.lat] },
      name: city.name,
      cityId: city.id
    }));

    this.allCitiesPointSeries.data.setAll(cityData);
  }

  ngOnChanges(changes: SimpleChanges) {
  
  if ((changes['lat'] || changes['lon']) && this.chart) {
    this.updateMarker();
  }
}

updateMarker() {
  if (!this.pointSeries || !this.chart) {
    return;
  }

  // Stop infinite rotation when a city is selected
  this.chart.animate({
    key: "rotationX",
    to: -this.lon,
    duration: 1000,
    loops: 1 // Stop the infinite loop
  });

  // Clear previous selected marker
  this.pointSeries.data.setAll([]);

  // Add new selected marker (large red pin)
  this.pointSeries.data.push({
    geometry: { type: "Point", coordinates: [this.lon, this.lat] }
  });

  // Animate rotation to city
  this.chart.animate({
    key: "rotationX",
    to: -this.lon,
    duration: 1000,
    easing: am5.ease.out(am5.ease.cubic)
  });

  this.chart.animate({
    key: "rotationY",
    to: -this.lat,
    duration: 1000,
    easing: am5.ease.out(am5.ease.cubic)
  });
}

  ngOnDestroy() {
    this.root?.dispose();
  }
}