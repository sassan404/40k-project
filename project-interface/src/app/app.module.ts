import { LocationComponent } from './Locations/locations.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './Races/races.component';
import { HomeComponent } from './Home/home.component';
import { ContactComponent } from './ContactUs/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    HomeComponent,
    LocationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
