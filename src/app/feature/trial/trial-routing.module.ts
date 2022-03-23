import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { ObservableComponent } from './components/observable/observable.component';

const routes: Routes = [
  {
    path:'', 
    children : [
      {
        path:'', redirectTo: "orbit", pathMatch: "full"
      },
      {
        path:'ng-template', component: NgTemplateComponent
      },
      {
        path:'orbit', component: ObservableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrialRoutingModule { }
