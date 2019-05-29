import { Component, Input, Output, EventEmitter, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FactionsService } from 'src/app/services/Factions/factions.service';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css'],
    providers: [FactionsService]
})

export class WelcomeComponent implements OnInit {
    @Input() show: boolean;
    @Input() faction: string;
    @Output() hide: EventEmitter<boolean> = new EventEmitter();
    factions: any;
    selectedFaction: FormControl;
    constructor ( private factionList: FactionsService, @Optional() private App: AppComponent ) { }
    ngOnInit () {
      this.getFactions();
      setTimeout(() => {  this.App.changeFaction(this.faction || this.factions[0]); }, 0);
      this.selectedFaction = new FormControl(this.faction || this.factions[0]);
    }
    getFactions () {
      this.factions = this.factionList.getFactions();
    }
    onChangeFaction = function() {
      this.App.changeFaction(this.selectedFaction.value);
    };
    submit = function() {
      this.hide.emit(true);
    };
}
