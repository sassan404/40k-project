import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeElement: string;
  pages = ['Home', 'Timeline', 'Races', 'Characters', 'Locations', 'Contact Us'];
  setActive = function( page: string) {
    this.activeElement = page;
  };
}
