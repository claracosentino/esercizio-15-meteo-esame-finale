import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GetTemperaturaService implements OnInit {

    latitudine: number = 0
    longitudine: number = 0

    constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
    }

    getTemperatura(lat:number, long: number) {
       return this.apiService.getTemperatura(lat, long)
    }
}