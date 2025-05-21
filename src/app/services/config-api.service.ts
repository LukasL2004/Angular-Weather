import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigAPIService {
  private APIBaseUrl = 'https://weatherapi230.p.rapidapi.com/current';
  XRapidAPIHostName = 'x-rapidapi-host';
  XRapidAPIHostValue = 'weatherapi230.p.rapidapi.com';
  XAPIKeyName = 'x-rapidapi-key';
  XAPIKeyValue = 'a4de4b0d08msh8634b2d3a2fdf84p121d02jsn3b10a22b90e3';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string) {
    return this.http.get(this.APIBaseUrl, {
      headers: new HttpHeaders()
        .set(this.XRapidAPIHostName, this.XRapidAPIHostValue)
        .set(this.XAPIKeyName, this.XAPIKeyValue),
      params: new HttpParams().set('units', 'metric').set('location', cityName),
    });
  }
}
