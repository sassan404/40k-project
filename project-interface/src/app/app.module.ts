import { LocationComponent } from './Components/Locations/locations.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './Components/Races/races.component';
import { HomeComponent } from './Components/Home/home.component';
import { ContactComponent } from './Components/ContactUs/contact.component';
import { CharactersComponent } from './Components/Characters/character.component';
import { NewsComponent } from './Components/News/news.component';
import { WelcomeComponent } from './Components/Welcome Page/welcome.component';
import { MainComponent } from './Components/Main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    HomeComponent,
    LocationComponent,
    ContactComponent,
    CharactersComponent,
    NewsComponent,
    WelcomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
