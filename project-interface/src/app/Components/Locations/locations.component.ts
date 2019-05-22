import { Location } from '../../Classes/location';
import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/Locations/locations.service';

@Component({
    selector: 'app-locations',
    templateUrl: 'locations.component.html',
    styleUrls: ['locations.Component.css'],
    providers: [LocationsService]
})

export class LocationComponent implements OnInit {
    locations: Location[];
    constructor (private locationService: LocationsService) { }
    getLocations() {
        this.locations = this.locationService.getLocations();
    }
    ngOnInit() {
        this.getLocations();
    }
}
