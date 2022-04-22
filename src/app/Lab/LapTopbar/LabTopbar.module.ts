import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabTopbarRoutingModule } from './LapTopbar-routing.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LabTopbarRoutingModule,
    MaterialModule
  ]
})
export class LabTopbarModule { }
