import { Injectable } from '@angular/core';
import { Races } from 'src/app/Data(temp)/races';
import { RacesComponent } from 'src/app/Components/Races/races.component';

@Injectable()
export class RacesService {

  constructor() { }
  getRaces () {
    return Races;
  }
}
