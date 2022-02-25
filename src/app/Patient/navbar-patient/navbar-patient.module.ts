import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarRoutingModule } from './navbar-patient-routing.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NavBarRoutingModule,
    
  ]
})
export class NavbarPatientModule { }
