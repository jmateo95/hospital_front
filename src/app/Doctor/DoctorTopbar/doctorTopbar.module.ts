import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorTopbarRoutingModule } from './doctorTopbar-routing.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    DoctorTopbarRoutingModule,
    MaterialModule
  ]
})
export class DoctorTopbarModule { }
