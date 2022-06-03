import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrialRoutingModule } from './trial-routing.module';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { PhonemaskComponent } from './components/phonemask/phonemask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectComponent } from './components/ng-select/ng-select.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleComponent } from './components/google/google.component';


@NgModule({
  declarations: [
    NgTemplateComponent,
    PhonemaskComponent,
    NgSelectComponent,
    GoogleComponent,
    
  ],
  imports: [
    CommonModule,
    TrialRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    SharedModule
  ]
})
export class TrialModule { }
