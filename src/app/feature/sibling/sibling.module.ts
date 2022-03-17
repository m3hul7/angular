import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiblingRoutingModule } from './sibling-routing.module';
import { SiblingFormComponent } from './sibling-form/sibling-form.component';
import { SiblingListComponent } from './sibling-list/sibling-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SiblingFormComponent,
    SiblingListComponent
  ],
  imports: [
    CommonModule,
    SiblingRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SiblingModule { }
