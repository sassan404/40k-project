import { Injectable } from '@angular/core';
import { CharactersComponent } from 'src/app/Components/Characters/character.component';
import { Characters } from 'src/app/Data(temp)/characters';

@Injectable()
export class CharactersService {

  constructor() { }
  getCharacters () {
    return Characters;
  }
}
