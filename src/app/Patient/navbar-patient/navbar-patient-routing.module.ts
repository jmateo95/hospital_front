import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePatientComponent } from '../home-patient/home-patient.component';
import { NavbarPatientComponent } from './navbar-patient.component';

const routes: Routes = [
  {path:'', component:NavbarPatientComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomePatientComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }