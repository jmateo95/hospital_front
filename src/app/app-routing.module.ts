import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAdminComponent } from './Administrator/dash-admin/dash-admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopbarComponent } from './topbar/topbar.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'dashboard', loadChildren: () => import('./topbar/topbar.module').then(x => x.TopbarModule) },
  { path: 'administrator', loadChildren: () => import('./Administrator/dash-admin/dash-admin.module').then(x => x.DashAdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
