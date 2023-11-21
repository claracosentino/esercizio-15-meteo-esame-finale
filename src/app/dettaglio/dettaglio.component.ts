import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemperaturaType } from '../_models/temperatura.type';
import { SunriseSunsetType } from '../_models/sunrisesunset.type';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html'
})
export class DettaglioComponent implements OnInit {

  temperature: TemperaturaType[] = []
  sunriseSunset: SunriseSunsetType = {} as SunriseSunsetType

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({getTemperatura, getSunriseSunset}) => {
      this.temperature = getTemperatura
      this.sunriseSunset = getSunriseSunset
    })

  }
}
