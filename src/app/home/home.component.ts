import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  fotoMilano = '../../assets/milan-img.avif'
  fotoMadrid = '../../assets/madrid-img.jpeg'
  fotoBerlino = '../../assets/berlin-img.jpeg'
  fotoRuffia = '../../assets/ruffia-img.jpeg'

  ngOnInit(): void {
    
  }

}
