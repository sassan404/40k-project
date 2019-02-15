import { Component } from '@angular/core';

@Component({
    selector: 'app-locations',
    templateUrl: 'locations.component.html',
    styleUrls: ['locations.Component.css']
})

export class LocationComponent {
    locations = [
        'Cadia',
        'Armageddon',
        'Aurelia',
        'Calderis',
        'Cyrene',
        'Kaurava System',
        'Kronus',
        'Meridian',
        'Prospero'
    ];
    link = '../../assets/images/locations';
}
