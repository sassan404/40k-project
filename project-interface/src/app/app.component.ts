import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = ['Home', 'Timeline', 'Races', 'Characters', 'Locations', 'Contact Us'];
  title = 'project-interface';
}
