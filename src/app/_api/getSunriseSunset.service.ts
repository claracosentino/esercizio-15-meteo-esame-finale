import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GetSunriseSunsetService implements OnInit {

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
    }

    getSunriseSunset(lat:string, long: string) {
       return this.apiService.getSunriseSunset(lat, long)
    }
}