import { Component } from '@angular/core';
import { Race } from '../../Classes/race';

@Component({
    selector: 'app-races',
    templateUrl: './races.component.html',
    styleUrls: ['./races.component.css']
})
export class RacesComponent {
    Races = [
        new Race ( 'Humans'),
        new Race ('Eldar'),
        new Race ('Necrons'),
        new Race ('Tyranids'),
        new Race ('orks'),
        new Race ('TAU')
    ];
}
