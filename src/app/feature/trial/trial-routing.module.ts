import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PhonemaskComponent } from './components/phonemask/phonemask.component';

const routes: Routes = [
  {
    path:'', 
    children : [
      {
        path:'', redirectTo: "phone", pathMatch: "full"
      },
      {
        path:'ng-template', component: NgTemplateComponent
      },
      {
        path:'orbit', component: ObservableComponent
      },
      {
        path:'phone', component: PhonemaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrialRoutingModule { }
