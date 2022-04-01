import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpDemoRoutingModule } from './mvp-demo-routing.module';
import { MvpDemoComponent } from './mvp-demo.component';
import { MvpClientformContainerComponent } from './mvp-clientform-container/mvp-clientform-container.component';
import { MvpClientlistContainerComponent } from './mvp-clientlist-container/mvp-clientlist-container.component';
import { MvpClientformPresentationComponent } from './mvp-clientform-container/mvp-clientform-presentation/mvp-clientform-presentation.component';
import { MvpClientlistPresentationComponent } from './mvp-clientlist-container/mvp-clientlist-presentation/mvp-clientlist-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterListPresentationComponent } from './mvp-clientlist-container/mvp-clientlist-presentation/filter-list-presentation/filter-list-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MvpDemoComponent,
    MvpClientformContainerComponent,
    MvpClientlistContainerComponent,
    MvpClientformPresentationComponent,
    MvpClientlistPresentationComponent,
    FilterListPresentationComponent,
  ],
  imports: [
    CommonModule,
    MvpDemoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MvpDemoModule { }
