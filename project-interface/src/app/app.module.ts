import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './Races/races.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
