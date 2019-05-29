import { Injectable } from '@angular/core';
import { Factions } from 'src/app/Data(temp)/factions';

@Injectable()
export class FactionsService {

  constructor() { }
  getFactions () {
    return Factions;
  }
}
