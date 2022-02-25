import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'administrator', loadChildren: () => import('./Administrator/dash-admin/dash-admin.module').then(x => x.DashAdminModule) },
  {path:'doctor', loadChildren: () => import('./Doctor/DoctorTopbar/doctorTopbar.module').then(x => x.DoctorTopbarModule)},
  {path:'lab', loadChildren: () => import('./Lab/LapTopbar/LabTopbar.module').then(x => x.LabTopbarModule)},
  {path: 'patient', loadChildren: () => import('./Patient/navbar-patient/navbar-patient.module').then(x => x.NavbarPatientModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
