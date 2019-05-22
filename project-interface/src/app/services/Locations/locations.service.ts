import { Injectable } from '@angular/core';
import { LocationComponent } from 'src/app/Components/Locations/locations.component';
import { Locations } from 'src/app/Data(temp)/locations';

@Injectable()
export class LocationsService {

  constructor() { }
  getLocations () {
    return Locations;
  }
}
