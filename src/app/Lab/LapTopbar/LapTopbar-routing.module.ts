import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { uploadTestComponent } from '../uploadTest/uploadTest.component';
import { LabTopbarComponent } from './LabTopbar.component';

const routes: Routes = [
  {path:'', component:LabTopbarComponent, children:[
    {path:'', redirectTo:'test', pathMatch:'full'},
    {path:'test', component:uploadTestComponent},   
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabTopbarRoutingModule { }
