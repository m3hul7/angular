import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrialRoutingModule } from './trial-routing.module';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { PhonemaskComponent } from './components/phonemask/phonemask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NgTemplateComponent,
    PhonemaskComponent
  ],
  imports: [
    CommonModule,
    TrialRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TrialModule { }
