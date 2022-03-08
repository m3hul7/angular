import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrialRoutingModule } from './trial-routing.module';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';


@NgModule({
  declarations: [
    NgTemplateComponent
  ],
  imports: [
    CommonModule,
    TrialRoutingModule
  ]
})
export class TrialModule { }
