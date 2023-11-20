import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_api/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetTemperaturaService } from '../_api/getTemperatura.service';
import { ActivatedRoute } from '@angular/router';
import { TemperaturaType } from '../_models/temperatura.type';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html'
})
export class DettaglioComponent implements OnInit {

  temperature: TemperaturaType[] = []
  latitudine: number = 0
  longitudine: number = 0

  constructor(private getTemperaturaService: GetTemperaturaService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params)=>{
        this.latitudine = parseFloat(params.get('lat')!)
        this.longitudine = parseFloat(params.get('long')!)

        this.getTemperaturaService.getTemperatura(this.latitudine, this.longitudine).subscribe((response:any) => {
          this.temperature = response
        })
      })
  }
}
