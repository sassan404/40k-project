import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/Characters/characters.service';
import { Character } from 'src/app/Classes/character';

@Component({
    selector: 'app-characters',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css'],
    providers: [CharactersService]
})
export class CharactersComponent implements OnInit {
   characters: Character[];
   constructor (private characterService: CharactersService) { }
   getCharacters(): void {
       this.characters = this.characterService.getCharacters();
   }
   ngOnInit () {
       this.getCharacters();
   }
}
