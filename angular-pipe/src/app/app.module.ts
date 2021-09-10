import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GradepipePipe } from './gradepipe.pipe';
import { HonorificPipePipe } from './honorific-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GradepipePipe,
    HonorificPipePipe  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
