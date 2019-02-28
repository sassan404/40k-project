import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent {
    @Input() show: boolean;
    @Output() hide = new EventEmitter<boolean>();
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
    submitFaction = function() {
        this.hide.emit(true);
      };
}
