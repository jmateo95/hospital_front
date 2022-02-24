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
    ConsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
