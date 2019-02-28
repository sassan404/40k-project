import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})

export class MainComponent {
    @Input() show: boolean;
    @Output() hide = new EventEmitter<boolean>();
    activeElement: string;
    pages = ['Home', 'Timeline', 'Races', 'Characters', 'Locations', 'Contact Us'];
    setActive = function( page: string) {
      this.activeElement = page;
    };
    showFactionPopup = function() {
        this.hide.emit(true);
      };
}
