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

    getTemperatura(lat:string, long: string) {
        return this.http
          .get('https://www.7timer.info/bin/astro.php?lon=' + long + '&lat=' + lat + '&ac=0&unit=metric&output=json&tzshift=0')
          .pipe(map((response:any) => {
            console.log(response.dataseries)
            return response.dataseries as TemperaturaType[]
        }))
    }

    getSunriseSunset(lat:string, long: string) {
        return this.http
          .get('https://api.sunrisesunset.io/json?lat=' + lat + '&lng=' + long)
          .pipe(map((response:any) => {
            response.results.status = response.status
            return response.results as SunriseSunsetType
        }))
    }

    getSunriseSunsetTomorrow(lat:string, long: string) {
        return this.http
          .get('https://api.sunrisesunset.io/json?lat=' + lat + '&lng=' + long + '&date=tomorrow')
          .pipe(map((response:any) => {
            response.results.status = response.status
            return response.results as SunriseSunsetType
        }))
    }
}