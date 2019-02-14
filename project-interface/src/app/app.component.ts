import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeElement: any;
  pages = ['Home', 'Timeline', 'Races', 'Characters', 'Locations', 'Contact Us'];
  title = 'project-interface';
  getConsole = function(page) {
    this.activeElement = page;
  };

}
