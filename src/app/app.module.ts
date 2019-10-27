import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
