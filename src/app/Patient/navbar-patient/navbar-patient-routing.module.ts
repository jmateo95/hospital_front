import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePatientComponent } from '../home-patient/home-patient.component';
import { NavbarPatientComponent } from './navbar-patient.component';
import { CreateAppointmentComponent } from '../component/appointment/create-appointment/create-appointment.component';
import { CreateTestComponent } from '../component/test/create-test/create-test.component';
import { SeeDoctorsComponent } from '../component/views/see-doctors/see-doctors.component';
import { SeeAppointmentsComponent } from '../component/views/see-appointments/see-appointments.component';
import { SeeTestsComponent } from '../component/views/see-tests/see-tests.component';
import { EditProfileComponent } from '../component/edit-profile/edit-profile.component';
import { DoctorProfileComponent } from '../component/helpers/doctor-profile/doctor-profile.component';
import { ServicesTestComponent } from '../component/views/services-test/services-test.component';
import { ServicesAppointmentComponent } from '../component/views/services-appointment/services-appointment.component';
import { ServiceInformationComponent } from '../component/helpers/service-information/service-information.component';

const routes: Routes = [
  {path:'', component:NavbarPatientComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomePatientComponent},
    {path:'appointment/create/:speciality/:doctor', component:CreateAppointmentComponent},
    {path:'appointment/create/:speciality', component:CreateAppointmentComponent},
    {path:'appointment/create', component:CreateAppointmentComponent},
    {path:'test/create/:type', component:CreateTestComponent},
    {path:'test/create', component:CreateTestComponent},
    {path:'doctors', component:SeeDoctorsComponent},
    {path:'services/appointment', component:ServicesAppointmentComponent},
    {path:'services/test', component:ServicesTestComponent},
    {path:'appointment/upcoming', component:SeeAppointmentsComponent},    
    {path:'appointment/history', component:SeeAppointmentsComponent},
    {path:'tests/upcoming', component:SeeTestsComponent},
    {path:'tests/history', component:SeeTestsComponent},
    {path:'edit-profile', component:EditProfileComponent},
    {path:'doctor/:id/view-profile', component:DoctorProfileComponent},
    {path:'appointment/see/:id', component:SeeAppointmentsComponent},
    {path:'test/see/:id', component:SeeTestsComponent},
    {path:'service/:type/:id', component:ServiceInformationComponent},
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }