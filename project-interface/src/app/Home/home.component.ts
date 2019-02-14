import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    newsList = [
        'Cadia Stands',
        'For The Emperor',
        'Guilliman is Back',
        'The planet fell before the guard'
    ];
}
