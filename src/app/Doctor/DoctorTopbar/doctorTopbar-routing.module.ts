import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorTopbarComponent } from './doctorTopbar.component';
import { informeComponent } from '../informe/informe.component';
import { appointmentComponent } from '../appointment/appointment.component';
import { OrderComponent } from '../Order/order.component';

const routes: Routes = [
  {path:'', component:DoctorTopbarComponent, children:[
    {path:'', redirectTo:'informe', pathMatch:'full'},
    {path:'informe', component:informeComponent},
    {path:'cita/crear', component:appointmentComponent},
    {path:'cita/orden', component:OrderComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorTopbarRoutingModule { }
