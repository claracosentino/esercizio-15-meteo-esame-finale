import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html'
})
export class CityCardComponent implements OnInit {

  @Input() bgImg : string = '';
  @Input() nomeCitta : string = '';
  @Input() nomeStato : string = '';
  @Input() latitude : string = '';
  @Input() longitude : string = '';

  ngOnInit(): void {
    
  }

}
