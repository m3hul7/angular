import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressFormRoutingModule } from './progress-form-routing.module';
import { ProgressFormComponent } from './progress-form.component';
import { FormoneComponent } from './components/formone/formone.component';
import { FormtwoComponent } from './components/formtwo/formtwo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormthreeComponent } from './components/formthree/formthree.component';
import { CompleteMsgComponent } from './components/complete-msg/complete-msg.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProgressFormComponent,
    FormoneComponent,
    FormtwoComponent,
    FormthreeComponent,
    CompleteMsgComponent,

  ],
  imports: [
    CommonModule,
    ProgressFormRoutingModule,
    SharedModule
  ]
})
export class ProgressFormModule { }
