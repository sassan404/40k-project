import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent implements OnInit {
    @Input() show: boolean;
    @Input() faction: string;
    @Output() changeFaction: EventEmitter<string> = new EventEmitter();
    @Output() hide: EventEmitter<boolean> = new EventEmitter();
    factions = [
        'Nurgle',
        'Khorn',
        'Slaneesh',
        'Tzeentch',
        'Chaos United',
        'Dark Eldar',
        'Craftworld Eldar',
        'Eldar Harlequins',
        'Necrons',
        'Orks',
        `T'au Empire`,
        'Tyranids',
        'Space Marines',
        'Asta Militarum',
        'Adepta Sororitas',
        'Adeptus Mechanicus',
        'Adeptus Custodes'
      ];
    selectedFaction: FormControl;
    ngOnInit () {
      this.selectedFaction = new FormControl(this.faction || this.factions[0]);
    }
    onChangeFaction = function() {
      this.changeFaction.emit(this.selectedFaction.value);
    };
    submit = function() {
      this.hide.emit(true);
    };
}
