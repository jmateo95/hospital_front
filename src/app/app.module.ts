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
import { DoctorReportsAdminComponent } from './Administrator/routes/doctor-more-reports-admin/doctor-more-reports-admin.component';
import { HomeComponent } from './Administrator/home/home.component';
import { DoctorTopbarComponent } from './Doctor/DoctorTopbar/doctorTopbar.component';
import { EditProfileLabComponent } from './Lab/routes/editProfileLab/editProfileLab.component';
import { homeLabComponent } from './Lab/routes/homeLab/homeLab.component';
import { HomeDoctorComponent } from './Doctor/routes/homeDoctor/homeDoctor.component';
import { PatientReportsComponent } from './Doctor/routes/patientWithMoreReports/patientReports.component';
import { PatientListComponent } from './Doctor/routes/patientList/patientList.component';
import { LabTopbarComponent } from './Lab/LapTopbar/LabTopbar.component';
import { ViewTestComponent } from './Lab/routes/viewTest/viewTest.component';
import { editProfileDoctorComponent } from './Doctor/routes/editProfileDoctor/editProfileDoctor.component';
import { HomePatientComponent } from './Patient/home-patient/home-patient.component';
import { NavbarPatientComponent } from './Patient/navbar-patient/navbar-patient.component';
import { DoctorCreateComponent } from './Administrator/routes/doctor-create/doctor-create.component';
import { ViewAppointmentComponent } from './Doctor/routes/viewAppintments/viewAppintments.component';
import { HistoryReportPatientComponent } from './Doctor/routes/historyReportPatient/historyReportPatient.component';
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
import { DayWithMoreTestMadeComponent } from './Lab/routes/DayWithMoreTestMade/dayWithMoreTestMade.component';
import { ExamsMadeComponent } from './Lab/routes/examsMade/examsMade.component';
import { SeeDoctorsComponent } from './Patient/component/views/see-doctors/see-doctors.component';
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
import { CalendarCardComponent } from './Patient/component/helpers/calendar-card/calendar-card.component';
import { AppointmentCardComponent } from './Patient/component/helpers/appointment-card/appointment-card.component';
import { SeeTestsComponent } from './Patient/component/views/see-tests/see-tests.component';
import { TestsCardComponent } from './Patient/component/helpers/tests-card/tests-card.component';
import { SeeDoctorAdminComponent } from './Administrator/views/see-doctor-admin/see-doctor-admin.component';
import { ConsListComponent } from './Administrator/routes/cons-list/cons-list.component';
import { ConsEditComponent } from './Administrator/routes/cons-edit/cons-edit.component';
import { CardLabComponent } from './Administrator/components/card-lab/card-lab.component';
import { SeeLabAdminComponent } from './Administrator/views/see-lab-admin/see-lab-admin.component';
import { EditProfileComponent } from './Patient/component/edit-profile/edit-profile.component';
import { DoctorProfileComponent } from './Patient/component/helpers/doctor-profile/doctor-profile.component';
import { ServicesAppointmentComponent } from './Patient/component/views/services-appointment/services-appointment.component';
import { ServicesTestComponent } from './Patient/component/views/services-test/services-test.component';
import { ServiceInformationComponent } from './Patient/component/helpers/service-information/service-information.component';
import { TestRepAdminComponent } from './Administrator/routes/test-rep-admin/test-rep-admin.component';
import { PatientRepAdminComponent } from './Administrator/routes/patient-rep-admin/patient-rep-admin.component';
import { DoctorRep1AdminComponent } from './Administrator/routes/doctor-rep1-admin/doctor-rep1-admin.component';
import { DoctorRepComponent } from './Administrator/routes/doctor-rep/doctor-rep.component';
import { ProfileAdminComponent } from './Administrator/routes/profile-admin/profile-admin.component';
import { HttpClientModule } from '@angular/common/http'
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
    ServiceCardComponent,
    SeeAppointmentsComponent, 
    ViewAppointmentComponent,
    PatientListComponent,
    ViewTestComponent,
    PatientReportsComponent,
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
    SeeLabAdminComponent,
    EditProfileComponent,
    DoctorProfileComponent,
    ServicesAppointmentComponent,
    ServicesTestComponent,
    ServiceInformationComponent,
    DayWithMoreTestMadeComponent,
    ExamsMadeComponent,
    HistoryReportPatientComponent,
    TestRepAdminComponent,
    PatientRepAdminComponent,
    DoctorRep1AdminComponent,
    DoctorReportsAdminComponent,
    DoctorRepComponent,
    ProfileAdminComponent,
    HomeDoctorComponent,
    homeLabComponent,
    editProfileDoctorComponent,
    EditProfileLabComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
