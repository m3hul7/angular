import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
    path:'', 
    children : [
      {
        path:'', redirectTo: "user-list", pathMatch: "full"
      },
      {
        path:'user-list', component: TodoListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
