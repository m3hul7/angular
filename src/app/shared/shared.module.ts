import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { FiledropzoneDirective } from './Directives/filedropzone.directive';
import { PhoneMaskingDirective } from './Directives/phone-masking.directive';



@NgModule({
  declarations: [
    PaginationComponent,
    FiledropzoneDirective,
    PhoneMaskingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    FiledropzoneDirective,
    PhoneMaskingDirective
  ]
})
export class SharedModule { }
