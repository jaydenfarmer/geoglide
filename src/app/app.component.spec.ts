import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { City } from './models/city.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize with no selected city', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.selectedCity).toBeNull();
  });

  it('should select a city when onCitySelected is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const testCity: City = {
      name: 'Test City',
      timezone: 'America/New_York',
      lat: 40.7128,
      lng: -74.006
    };
    
    app.onCitySelected(testCity);
    expect(app.selectedCity).toEqual(testCity);
  });

  it('should update displayed cities when onDisplayedCitiesChanged is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    const testCities: City[] = [
      {
        name: 'Test City 1',
        timezone: 'America/New_York',
        lat: 40.7128,
        lng: -74.006
      },
      {
        name: 'Test City 2',
        timezone: 'Europe/London',
        lat: 51.5072,
        lng: -0.1276
      }
    ];
    
    app.onDisplayedCitiesChanged(testCities);
    expect(app.displayedCities).toEqual(testCities);
  });
});