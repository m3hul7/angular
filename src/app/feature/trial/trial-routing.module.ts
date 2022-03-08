import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';

const routes: Routes = [
  {
    path:'', 
    children : [
      {
        path:'', redirectTo: "ng-template", pathMatch: "full"
      },
      {
        path:'ng-template', component: NgTemplateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrialRoutingModule { }
