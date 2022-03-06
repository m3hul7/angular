import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchOptionsPipe } from './pipes/search-options.pipe';

import {OverlayModule} from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    UsersFormComponent,
    UsersListComponent,
    SearchOptionsPipe,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    DragDropModule
  ]
})
export class UsersModule { }
