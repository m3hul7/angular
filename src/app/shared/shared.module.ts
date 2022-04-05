import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { FiledropzoneDirective } from './Directives/filedropzone.directive';



@NgModule({
  declarations: [
    PaginationComponent,
    FiledropzoneDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    FiledropzoneDirective
  ]
})
export class SharedModule { }
