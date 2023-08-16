import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';

describe('Test of WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('The WeatherComponent should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Checking change of color onChange', () => {
    const color = 'white';
    component.weatherData.temperature = 34;
    component.ngOnChanges();
    expect(component.numberColor).not.toEqual(color);
  })

});
