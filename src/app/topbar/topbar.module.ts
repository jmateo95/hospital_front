import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarRoutingModule } from './topbar-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopbarRoutingModule,
    MaterialModule
  ]
})
export class TopbarModule { }
