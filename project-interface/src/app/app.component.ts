import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showWelcome = true;
  showMain = false;
  onHide = function(show) {
    this.showWelcome = !show;
    this.showMain = true;
  };
}
