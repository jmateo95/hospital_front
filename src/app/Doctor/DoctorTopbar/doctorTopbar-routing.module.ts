import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorTopbarComponent } from './doctorTopbar.component';
import { AppointmentComponent } from '../routes/appointment/appointment.component'; 
import { CreateReportComponent } from '../routes/createReport/createReport.component';
import { OrderComponent } from '../routes/Order/order.component';

const routes: Routes = [
  {path:'', component:DoctorTopbarComponent, children:[
    {path:'', redirectTo:'report', pathMatch:'full'},
    {path:'report', component:CreateReportComponent},    
    {path:'cita/crear', component:AppointmentComponent},
    {path:'cita/orden', component:OrderComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorTopbarRoutingModule { }
