import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user/user-list/user-list.component';
import { MvpPatternUserComponent } from './mvp-pattern-user.component';
import { UserContainerComponent } from './user-container/user-container.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'', redirectTo: "container", pathMatch: "full"
      },
      {
        path: 'container', component: UserContainerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpPatternUserRoutingModule { }
