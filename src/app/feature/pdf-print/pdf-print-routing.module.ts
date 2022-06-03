import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfPrintComponent } from './pdf-print.component';

const routes: Routes = [{ path: '', component: PdfPrintComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfPrintRoutingModule { }
