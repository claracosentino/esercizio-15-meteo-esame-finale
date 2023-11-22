import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApiService } from './_api/api.service';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CityCardComponent } from './city-card/city-card.component';
import { FormRicercaComponent } from './form-ricerca/form-ricerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DettaglioComponent,
    NavbarComponent,
    CityCardComponent,
    FormRicercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
