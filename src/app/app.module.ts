import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from './material/material.module';
import { AdminComponent } from './admin/admin.component';
import { DashAdminComponent } from './Administrator/dash-admin/dash-admin.component';
import { HomeComponent } from './Administrator/home/home.component';
import { HomePatientComponent } from './Patient/home-patient/home-patient.component';
import { NavbarPatientComponent } from './Patient/navbar-patient/navbar-patient.component';
import { DoctorCreateComponent } from './Administrator/routes/doctor-create/doctor-create.component';
import { LabCreateComponent } from './Administrator/routes/lab-create/lab-create.component';
import { EspeCreateComponent } from './Administrator/routes/espe-create/espe-create.component';
import { ConsCreateComponent } from './Administrator/routes/cons-create/cons-create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CreateAppointmentComponent } from './Patient/component/appointment/create-appointment/create-appointment.component';
import { CreateTestComponent } from './Patient/component/test/create-test/create-test.component';
import { DoctorCardComponent } from './Patient/component/helpers/doctor-card/doctor-card.component';
import { SeeDoctorsComponent } from './Patient/component/views/see-doctors/see-doctors.component';
import { SeeServicesComponent } from './Patient/component/views/see-services/see-services.component';
import { ServiceCardComponent } from './Patient/component/helpers/service-card/service-card.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SeeAppointmentsComponent } from './Patient/component/views/see-appointments/see-appointments.component';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TopbarComponent,
    AdminComponent,
    DashAdminComponent,
    HomeComponent,
    HomePatientComponent,
    NavbarPatientComponent,
    DoctorCreateComponent,
    LabCreateComponent,
    EspeCreateComponent,
    ConsCreateComponent,
    CreateAppointmentComponent,
    CreateTestComponent,
    DoctorCardComponent,
    SeeDoctorsComponent,
    SeeServicesComponent,
    ServiceCardComponent,
    SeeAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
