import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  VigilanteGuard } from './Vigilantes//vigilante.guard';
import { VigilantedoctorGuard } from './Vigilantes/vigilantedoctor.guard';
import { VigilantelabGuard } from './Vigilantes/vigilantelab.guard';
import { VigilantepatientGuard } from './Vigilantes/vigilantepatient.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {
    path: 'administrator',
    loadChildren: () => import('./Administrator/dash-admin/dash-admin.module').then(x => x.DashAdminModule),
    canActivateChild:[VigilanteGuard]
  },
  {
    path:'doctor', 
    loadChildren: () => import('./Doctor/DoctorTopbar/doctorTopbar.module').then(x => x.DoctorTopbarModule),
    canActivateChild:[VigilantedoctorGuard]
  },
  {
    path:'lab', 
    loadChildren: () => import('./Lab/LapTopbar/LabTopbar.module').then(x => x.LabTopbarModule),
    canActivateChild:[VigilantelabGuard]
  },
  {
    path: 'patient', 
    loadChildren: () => import('./Patient/navbar-patient/navbar-patient.module').then(x => x.NavbarPatientModule),
    canActivateChild:[VigilantepatientGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
