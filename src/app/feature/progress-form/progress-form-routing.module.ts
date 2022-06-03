import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteMsgComponent } from './components/complete-msg/complete-msg.component';
import { FormoneComponent } from './components/formone/formone.component';
import { FormthreeComponent } from './components/formthree/formthree.component';
import { FormtwoComponent } from './components/formtwo/formtwo.component';
import { ProgressFormComponent } from './progress-form.component';

const routes: Routes = [
  { path: '', component : ProgressFormComponent,
  children : [
      
      {
        path: 'formone', component : FormoneComponent
      },
      {
        path: 'formtwo' , component : FormtwoComponent
      },
      {
        path: 'formthree' , component : FormthreeComponent
      },
      {
        path: 'complete' , component : CompleteMsgComponent
      },
      {
        path: '',
        pathMatch : 'full',
        redirectTo : 'formone'
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressFormRoutingModule { }
