import { Component, OnInit } from '@angular/core';

type InputFormType = {
    latitudine: number,
    longitudine: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  jsonIn: InputFormType  = {
    latitudine: 0,
    longitudine: 0
  }

  ngOnInit(): void {
    
  }

}
