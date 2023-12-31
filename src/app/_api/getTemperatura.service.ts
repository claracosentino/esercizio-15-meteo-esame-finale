import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GetTemperaturaService implements OnInit {

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
    }

    getTemperatura(lat:string, long: string) {
       return this.apiService.getTemperatura(lat, long)
    }
}