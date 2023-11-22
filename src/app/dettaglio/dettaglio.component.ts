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
  sunriseSunsetTomorrow: SunriseSunsetType = {} as SunriseSunsetType
  toggleSunsetSunriseToday = true;
  toggleHourFormat24 = true;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({getTemperatura, getSunriseSunset, getSunriseSunsetTomorrow}) => {
      this.temperature = getTemperatura
      this.sunriseSunset = getSunriseSunset
      this.sunriseSunsetTomorrow = getSunriseSunsetTomorrow
    })

  }

  convertIn24h (format12h: string) {
    // prendo gli ultimi due caratteri, quindi am o pm
    let amOrPm = format12h.slice(-2)
    // prendo tutto l'orario tranne am o pm
    let hourWithoutAmOrPm = format12h.slice(0, -2)
    // dove si trovano i due punti, per poi spezzare il blocco dell'ora dal blocco dei minuti e secondi
    let indexDuePunti = format12h.indexOf(':')
    // blocco dell'ora
    let hour = parseInt(format12h.substring(0,indexDuePunti))
    // blocco dei minuti e secondi
    let minAndSeconds = hourWithoutAmOrPm.substring(indexDuePunti)
    if(amOrPm == 'AM'){
      return hourWithoutAmOrPm
    } else {
      hour = hour + 12
      return hour + minAndSeconds
    }
  }
}
