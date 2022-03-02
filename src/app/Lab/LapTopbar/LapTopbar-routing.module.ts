import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayWithMoreTestMadeComponent } from '../routes/DayWithMoreTestMade/dayWithMoreTestMade.component';
import { EditProfileLabComponent } from '../routes/editProfileLab/editProfileLab.component';
import { ExamsMadeComponent } from '../routes/examsMade/examsMade.component';
import { homeLabComponent } from '../routes/homeLab/homeLab.component';
import { UploadTestComponent } from '../routes/uploadTest/uploadTest.component';
import { ViewTestComponent } from '../routes/viewTest/viewTest.component';
import { LabTopbarComponent } from './LabTopbar.component';

const routes: Routes = [
  {path:'', component:LabTopbarComponent, children:[
    {path:'', redirectTo:'home', pathMatch:'full'},    
    {path: 'home', component: homeLabComponent},
    {path: 'perfil', component:EditProfileLabComponent},
    {path:'test', component:UploadTestComponent},  
    {path:'viewTest', component:ViewTestComponent},
    {path: 'testmade', component: ExamsMadeComponent},
    {path: 'dayMoretest', component: DayWithMoreTestMadeComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabTopbarRoutingModule { }
