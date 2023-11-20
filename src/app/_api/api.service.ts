import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TemperaturaType } from '../_models/temperatura.type';
import { SunriseSunsetType } from '../_models/sunrisesunset.type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getTemperatura(lat:number, long: number) {
        return this.http
          .get('https://www.7timer.info/bin/astro.php?lon=' + long + '&lat=' + lat + '&ac=0&unit=metric&output=json&tzshift=0')
          .pipe(map((response:any) => {
            return response.dataseries as TemperaturaType[]
        }))
    }

    getSunriseSunset(lat:number, long: number) {
        return this.http
          .get('https://api.sunrisesunset.io/json?lat=' + lat + '&lng=' + long)
          .pipe(map((response:any) => {
            return response  as SunriseSunsetType[]
        }))
    }
}