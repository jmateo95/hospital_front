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
import { PatientListComponent } from 'src/app/Doctor/routes/patientList/patientList.component';
import { PatientRepAdminComponent } from '../routes/patient-rep-admin/patient-rep-admin.component';
import { DoctorRep1AdminComponent } from '../routes/doctor-rep1-admin/doctor-rep1-admin.component';
import { DoctorReportsAdminComponent } from '../routes/doctor-more-reports-admin/doctor-more-reports-admin.component';
import { DoctorRepComponent } from '../routes/doctor-rep/doctor-rep.component';

const routes: Routes = [
  {path:'', component:DashAdminComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'doctor/create', component:DoctorCreateComponent},
    {path:'doctor/see/edit/:id', component:DoctorEditComponent},
    {path:'doctor/rep1', component:DoctorRep1AdminComponent},
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
    {path:'patient/rep', component:PatientRepAdminComponent},
    {path: 'doctor/reportes', component:DoctorReportsAdminComponent},
    {path:'doctor/rep/lower-performance', component:DoctorRepComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAdminRoutingModule { }
