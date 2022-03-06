import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    UserModule,
    UsersModule
  ]
})
export class FeatureModule { }
