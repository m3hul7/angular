import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpPatternUserRoutingModule } from './mvp-pattern-user-routing.module';
import { MvpPatternUserComponent } from './mvp-pattern-user.component';

import { UserContainerComponent } from './user-container/user-container.component';
import { UserListPresentationComponent } from './user-container/user-list-presentation/user-list-presentation.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    MvpPatternUserComponent,
    UserContainerComponent,
    UserListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpPatternUserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class MvpPatternUserModule { }
