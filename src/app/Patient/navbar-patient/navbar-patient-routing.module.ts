import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePatientComponent } from '../home-patient/home-patient.component';
import { NavbarPatientComponent } from './navbar-patient.component';
import { CreateAppointmentComponent } from '../component/appointment/create-appointment/create-appointment.component';
import { CreateTestComponent } from '../component/test/create-test/create-test.component';
import { SeeDoctorsComponent } from '../component/views/see-doctors/see-doctors.component';
import { SeeServicesComponent } from '../component/views/see-services/see-services.component';
import { SeeAppointmentsComponent } from '../component/views/see-appointments/see-appointments.component';
import { SeeTestsComponent } from '../component/views/see-tests/see-tests.component';
import { EditProfileComponent } from '../component/edit-profile/edit-profile.component';
import { DoctorProfileComponent } from '../component/helpers/doctor-profile/doctor-profile.component';
const routes: Routes = [
  {path:'', component:NavbarPatientComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomePatientComponent},
    {path:'appointment/create', component:CreateAppointmentComponent},
    {path:'test/create', component:CreateTestComponent},
    {path:'doctors', component:SeeDoctorsComponent},
    {path:'services', component:SeeServicesComponent},
    {path:'appointment/see-all', component:SeeAppointmentsComponent},
    {path:'tests/see-all', component:SeeTestsComponent},
    {path:'edit-profile', component:EditProfileComponent},
    {path:'doctor/view-profile', component:DoctorProfileComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }