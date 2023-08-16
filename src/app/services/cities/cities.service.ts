import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const CITIES_API_URL = 'https://countriesnow.space/api/v0.1/countries/capital'

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(public http: HttpClient) {}

  getCapitalCities(): Observable<any> {
    return this.http.get(
      CITIES_API_URL
    );
  }
}
