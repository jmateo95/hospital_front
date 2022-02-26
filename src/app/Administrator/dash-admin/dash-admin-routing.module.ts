import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ConsCreateComponent } from '../routes/cons-create/cons-create.component';
import { DoctorCreateComponent } from '../routes/doctor-create/doctor-create.component';
import { DoctorEditComponent } from '../routes/doctor-edit/doctor-edit.component';
import { EspeCreateComponent } from '../routes/espe-create/espe-create.component';
import { LabCreateComponent } from '../routes/lab-create/lab-create.component';
import { LabEditComponent } from '../routes/lab-edit/lab-edit.component';
import { TestCreateComponent } from '../routes/test-create/test-create.component';
import { TestEditComponent } from '../routes/test-edit/test-edit.component';
import { TestListComponent } from '../routes/test-list/test-list.component';
import { DashAdminComponent } from './dash-admin.component';

const routes: Routes = [
  {path:'', component:DashAdminComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'doctor/create', component:DoctorCreateComponent},
    {path:'doctor/list/edit/:id_doctor', component:DoctorEditComponent},
    {path:'lab/create', component:LabCreateComponent},
    {path:'lab/list/edit/:id_lab', component:LabEditComponent},
    {path:'espe/create', component:EspeCreateComponent},
    {path:'cons/create', component:ConsCreateComponent},
    {path:'test/create', component:TestCreateComponent},
    {path:'test/list', component:TestListComponent},
    {path:'test/list/edit/:id_test', component:TestEditComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAdminRoutingModule { }
