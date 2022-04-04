import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DndFileUploadComponent } from './dnd-file-upload.component';

const routes: Routes = [{ path: '', component: DndFileUploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DndFileUploadRoutingModule { }
