import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherInfo } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnChanges {
  numberColor = 'white';
  @Input() weatherData: WeatherInfo = {
    temperature: 0,
    tempMax: 0,
    tempMin: 0,
    icon: '',
    name: '',
    lat: 0,
    long: 0
  };
  @Input() cityName: string = 'Kabul';
  @Input() error = false;

  constructor() {}


ngOnChanges(): void {
    if (this.weatherData.temperature >= 33) {
      this.numberColor = 'red';
    } else if (this.weatherData.temperature > 25 && this.weatherData.tempMax < 33) {
      this.numberColor = 'yellow';
    } else {
      this.numberColor = 'white';
    }
  }

}
