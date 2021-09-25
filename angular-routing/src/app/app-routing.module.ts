import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { EditstudentComponent } from './studentlist/editstudent/editstudent.component';



const routes: Routes = [
  {path:'studentlist', component:StudentlistComponent, children:[{path:'editstudent/:id', component:EditstudentComponent}]},  
  {path:'subjects', component:SubjectsComponent},
  {path:'', redirectTo:"/studentlist", pathMatch:'full'},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
