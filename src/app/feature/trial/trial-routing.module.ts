import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';
import { GoogleChartComponent } from 'angular-google-charts';
import { GoogleComponent } from './components/google/google.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PhonemaskComponent } from './components/phonemask/phonemask.component';

const routes: Routes = [
  {
    path:'', 
    children : [
      {
        path:'', redirectTo: "google", pathMatch: "full"
      },
      {
        path:'ng-template', component: NgTemplateComponent
      },
      {
        path:'orbit', component: ObservableComponent
      },
      {
        path:'phone', component: PhonemaskComponent
      },
      {
        path:'select', component: NgSelectComponent
      },
      {
        path:'graph', component: GoogleChartComponent
      },
      {
        path:'google', component: GoogleComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrialRoutingModule { }
