import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DoctorTopbarComponent } from './Doctor/doctorTopbar/doctorTopbar.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'dashboard', loadChildren: () => import('./topbar/topbar.module').then(x => x.TopbarModule) },
  {path:'doctor', loadChildren: () => import('./Doctor/doctorTopbar/doctorTopbar.module').then(x => x.DoctorTopbarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
