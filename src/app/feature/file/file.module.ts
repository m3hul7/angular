import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './file.component';
import { ProgressComponent } from './progress/progress.component';
import { DndDirective } from './dnd.directive';


@NgModule({
  declarations: [
    FileComponent,
    ProgressComponent,
    DndDirective
  ],
  imports: [
    CommonModule,
    FileRoutingModule
  ]
})
export class FileModule { }
