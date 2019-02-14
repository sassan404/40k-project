import { Component } from '@angular/core';

@Component({
    selector: 'app-races',
    templateUrl: './races.component.html',
    styleUrls: ['./races.component.css']
})
export class RacesComponent {
Races = [
    {
        name: 'Humans',
        age: 'unknown'
    }, {
        name: 'Eldar',
        age: 'unknown'
    }, {
        name: 'Necrons',
        age: 'unkown'
    }, {
        name: 'Tyranids',
        age: 'unknown'
    }, {
        name: 'Orks',
        age: 'unknown'
    }, {
        name: 'TAU',
        age: 'unknown'
    }
];
}
