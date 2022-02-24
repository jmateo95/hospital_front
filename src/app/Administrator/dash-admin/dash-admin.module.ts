import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAdminRoutingModule } from './dash-admin-routing.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashAdminRoutingModule,
    MaterialModule
  ]
})
export class DashAdminModule { }
