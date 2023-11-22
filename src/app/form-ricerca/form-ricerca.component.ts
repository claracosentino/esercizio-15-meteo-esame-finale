import { Component, Input, OnInit } from '@angular/core';

type InputFormType = {
    latitudine: number,
    longitudine: number
}

@Component({
  selector: 'app-form-ricerca',
  templateUrl: './form-ricerca.component.html'
})
export class FormRicercaComponent implements OnInit {

  jsonIn: InputFormType  = {
    latitudine: 0,
    longitudine: 0
  }

  ngOnInit(): void {
    
  }

}
