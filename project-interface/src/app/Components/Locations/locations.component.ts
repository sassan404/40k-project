import { Location } from '../../Classes/location';
import { Component } from '@angular/core';

@Component({
    selector: 'app-locations',
    templateUrl: 'locations.component.html',
    styleUrls: ['locations.Component.css']
})

export class LocationComponent {
    locations = [
        new Location ('Cadia'),
        new Location ('Armageddon'),
        new Location ('Aurelia'),
        new Location ('Calderis'),
        new Location ('Cyrene'),
        new Location ('Kaurava System'),
        new Location ('Kronus'),
        new Location ('Meridian'),
        new Location ('Prospero')
    ];
}
