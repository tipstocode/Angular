import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentlistComponent } from './studentlist/studentlist.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { EditstudentComponent } from './studentlist/editstudent/editstudent.component';


@NgModule({
  declarations: [
    AppComponent,
    EditstudentComponent,
    StudentlistComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
