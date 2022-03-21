import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiblingRoutingModule } from './sibling-routing.module';
import { SiblingFormComponent } from './sibling-form/sibling-form.component';
import { SiblingListComponent } from './sibling-list/sibling-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    SiblingFormComponent,
    SiblingListComponent
  ],
  imports: [
    CommonModule,
    SiblingRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ]
})
export class SiblingModule { }
