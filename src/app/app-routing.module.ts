import { NgModule, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { GetTemperaturaService } from './_api/getTemperatura.service';
import { GetSunriseSunsetService } from './_api/getSunriseSunset.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dettaglio/:lat/:long',
    component: DettaglioComponent,
    resolve: {
      getTemperatura: (route: ActivatedRouteSnapshot) => {
        return inject(GetTemperaturaService).getTemperatura(route.paramMap.get('lat')!, route.paramMap.get('long')!);
      },
      getSunriseSunset: (route: ActivatedRouteSnapshot) => {
        return inject(GetSunriseSunsetService).getSunriseSunset(route.paramMap.get('lat')!, route.paramMap.get('long')!);
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
