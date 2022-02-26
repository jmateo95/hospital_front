import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminComponent } from './admin/admin.component';
import { DashAdminComponent } from './Administrator/dash-admin/dash-admin.component';
import { HomeComponent } from './Administrator/home/home.component';
import { DoctorTopbarComponent } from './Doctor/DoctorTopbar/doctorTopbar.component';
import { LabTopbarComponent } from './Lab/LapTopbar/LabTopbar.component';
import { HomePatientComponent } from './Patient/home-patient/home-patient.component';
import { NavbarPatientComponent } from './Patient/navbar-patient/navbar-patient.component';
import { DoctorCreateComponent } from './Administrator/routes/doctor-create/doctor-create.component';
import { LabCreateComponent } from './Administrator/routes/lab-create/lab-create.component';
import { EspeCreateComponent } from './Administrator/routes/espe-create/espe-create.component';
import { ConsCreateComponent } from './Administrator/routes/cons-create/cons-create.component';
import { CreateReportComponent } from './Doctor/routes/createReport/createReport.component';
import { AppointmentComponent } from './Doctor/routes/appointment/appointment.component';
import { OrderComponent } from './Doctor/routes/Order/order.component';
import { UploadTestComponent } from './Lab/routes/uploadTest/uploadTest.component';
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
import listPlugin from '@fullcalendar/list';
import { SeeAppointmentsComponent } from './Patient/component/views/see-appointments/see-appointments.component';
import { TestCreateComponent } from './Administrator/routes/test-create/test-create.component';
import { TestListComponent } from './Administrator/routes/test-list/test-list.component';
import { TestEditComponent } from './Administrator/routes/test-edit/test-edit.component';
import { DoctorEditComponent } from './Administrator/routes/doctor-edit/doctor-edit.component';
import { LabEditComponent } from './Administrator/routes/lab-edit/lab-edit.component';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);
import { CalendarCardComponent } from './Patient/component/helpers/calendar-card/calendar-card.component';
import { AppointmentCardComponent } from './Patient/component/helpers/appointment-card/appointment-card.component';
import { SeeTestsComponent } from './Patient/component/views/see-tests/see-tests.component';
import { TestsCardComponent } from './Patient/component/helpers/tests-card/tests-card.component';
import { SeeDoctorAdminComponent } from './Administrator/views/see-doctor-admin/see-doctor-admin.component';
import { ConsListComponent } from './Administrator/routes/cons-list/cons-list.component';
import { ConsEditComponent } from './Administrator/routes/cons-edit/cons-edit.component';
import { CardLabComponent } from './Administrator/components/card-lab/card-lab.component';
import { SeeLabAdminComponent } from './Administrator/views/see-lab-admin/see-lab-admin.component';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin,listPlugin]);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    DoctorTopbarComponent,
    DashAdminComponent,
    HomeComponent,
    LabTopbarComponent,
    HomePatientComponent,
    NavbarPatientComponent,
    DoctorCreateComponent,
    LabCreateComponent,
    EspeCreateComponent,
    ConsCreateComponent,
    CreateReportComponent,
    AppointmentComponent,
    OrderComponent,
    UploadTestComponent,
    CreateAppointmentComponent,
    CreateTestComponent,
    DoctorCardComponent,
    SeeDoctorsComponent,
    SeeServicesComponent,
    ServiceCardComponent,
    SeeAppointmentsComponent,
    TestCreateComponent,
    TestListComponent,
    TestEditComponent,
    DoctorEditComponent,
    LabEditComponent,
    CalendarCardComponent,
    AppointmentCardComponent,
    SeeTestsComponent,
    TestsCardComponent,
    SeeDoctorAdminComponent,
    ConsListComponent,
    ConsEditComponent,
    CardLabComponent,
    SeeLabAdminComponent
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
