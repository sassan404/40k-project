import { Injectable } from '@angular/core';
import { Characters } from 'src/app/Data(temp)/characters';

@Injectable()
export class CharactersService {

  constructor() { }
  getCharacters () {
    return Characters;
  }
}
