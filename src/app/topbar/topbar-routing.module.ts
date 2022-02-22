import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { TopbarComponent } from './topbar.component';

const routes: Routes = [
  {path:'', component:TopbarComponent, children:[
    {path:'', redirectTo:'admin', pathMatch:'full'},
    {path:'admin', component:AdminComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopbarRoutingModule { }
