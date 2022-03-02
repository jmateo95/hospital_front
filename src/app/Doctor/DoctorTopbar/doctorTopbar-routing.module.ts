import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorTopbarComponent } from './doctorTopbar.component';
import { AppointmentComponent } from '../routes/appointment/appointment.component'; 
import { CreateReportComponent } from '../routes/createReport/createReport.component';
import { OrderComponent } from '../routes/Order/order.component';
import { ViewAppointmentComponent } from '../routes/viewAppintments/viewAppintments.component';
import { PatientListComponent } from '../routes/patientList/patientList.component';
import { PatientReportsComponent } from '../routes/patientWithMoreReports/patientReports.component';
import { HistoryReportPatientComponent } from '../routes/historyReportPatient/historyReportPatient.component';

const routes: Routes = [
  {path:'', component:DoctorTopbarComponent, children:[
    {path:'', redirectTo:'citas', pathMatch:'full'},
    {path:'report', component:CreateReportComponent},    
    {path:'cita/crear', component:AppointmentComponent},
    {path:'cita/orden', component:OrderComponent},
    {path:'citas',component:ViewAppointmentComponent},
    {path:'pacientes',component:PatientListComponent},
    {path:'pacientes/reportes', component:PatientReportsComponent},
    {path: 'historial/paciente/:name_patient', component:HistoryReportPatientComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorTopbarRoutingModule { }
