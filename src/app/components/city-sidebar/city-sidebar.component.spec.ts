import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySidebarComponent } from './city-sidebar.component';

describe('CitySidebarComponent', () => {
  let component: CitySidebarComponent;
  let fixture: ComponentFixture<CitySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitySidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
