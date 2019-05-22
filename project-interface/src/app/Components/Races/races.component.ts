import { Component, OnInit } from '@angular/core';
import { Race } from '../../Classes/race';
import { RacesService } from 'src/app/services/Races/races.service';

@Component({
    selector: 'app-races',
    templateUrl: './races.component.html',
    styleUrls: ['./races.component.css'],
    providers: [RacesService]
})
export class RacesComponent implements OnInit {
    races: Race[];
    constructor (private raceService: RacesService) { }
    getRaces(): void {
        this.races = this.raceService.getRaces();
      }
    ngOnInit () {
        this.getRaces();
    }
}
