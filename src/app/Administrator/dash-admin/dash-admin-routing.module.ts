import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ConsCreateComponent } from '../routes/cons-create/cons-create.component';
import { DoctorCreateComponent } from '../routes/doctor-create/doctor-create.component';
import { EspeCreateComponent } from '../routes/espe-create/espe-create.component';
import { LabCreateComponent } from '../routes/lab-create/lab-create.component';
import { DashAdminComponent } from './dash-admin.component';

const routes: Routes = [
  {path:'', component:DashAdminComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'doctor/create', component:DoctorCreateComponent},
    {path:'lab/create', component:LabCreateComponent},
    {path:'espe/create', component:EspeCreateComponent},
    {path:'cons/create', component:ConsCreateComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAdminRoutingModule { }
