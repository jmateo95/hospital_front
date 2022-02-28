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
import { SeeDoctorAdminComponent } from '../views/see-doctor-admin/see-doctor-admin.component';
import { ConsListComponent } from '../routes/cons-list/cons-list.component';
import { ConsEditComponent } from '../routes/cons-edit/cons-edit.component';
import { SeeLabAdminComponent } from '../views/see-lab-admin/see-lab-admin.component';
import { TestRepAdminComponent } from '../routes/test-rep-admin/test-rep-admin.component';

const routes: Routes = [
  {path:'', component:DashAdminComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'doctor/create', component:DoctorCreateComponent},
    {path:'doctor/see/edit/:id_doctor', component:DoctorEditComponent},
    {path:'lab/create', component:LabCreateComponent},
    {path:'lab/see', component:SeeLabAdminComponent},
    {path:'lab/see/edit/:id_lab', component:LabEditComponent},
    {path:'espe/create', component:EspeCreateComponent},
    {path:'cons/create', component:ConsCreateComponent},
    {path:'cons/list', component:ConsListComponent},
    {path:'cons/list/edit/:id_cons', component:ConsEditComponent},
    {path:'test/create', component:TestCreateComponent},
    {path:'test/list', component:TestListComponent},
    {path:'test/list/edit/:id_test', component:TestEditComponent},
    {path:'test/rep', component:TestRepAdminComponent},
    {path:'doctor/see', component:SeeDoctorAdminComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAdminRoutingModule { }
