import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiblingFormComponent } from './sibling-form/sibling-form.component';
import { SiblingListComponent } from './sibling-list/sibling-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: "list", pathMatch: "full"},
      {
        path:'list', component: SiblingListComponent
      },
      {
        path:'form', component: SiblingFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiblingRoutingModule { }
