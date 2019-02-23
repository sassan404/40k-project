import { LocationComponent } from './Components/Locations/locations.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './Components/Races/races.component';
import { HomeComponent } from './Components/Home/home.component';
import { ContactComponent } from './Components/ContactUs/contact.component';
import { CharactersComponent } from './Components/Characters/character.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    HomeComponent,
    LocationComponent,
    ContactComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
