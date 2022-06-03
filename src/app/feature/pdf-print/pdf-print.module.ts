import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfPrintRoutingModule } from './pdf-print-routing.module';
import { PdfPrintComponent } from './pdf-print.component';


@NgModule({
  declarations: [
    PdfPrintComponent
  ],
  imports: [
    CommonModule,
    PdfPrintRoutingModule
  ]
})
export class PdfPrintModule { }
