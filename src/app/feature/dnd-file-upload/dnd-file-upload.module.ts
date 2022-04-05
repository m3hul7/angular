import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DndFileUploadRoutingModule } from './dnd-file-upload-routing.module';
import { DndFileUploadComponent } from './dnd-file-upload.component';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DndFileUploadComponent,
    FileListPresentationComponent,
    FileUploadPresentationComponent
  ],
  imports: [
    CommonModule,
    DndFileUploadRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class DndFileUploadModule { }
