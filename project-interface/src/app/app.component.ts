import { Component, OnInit, Inject} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showWelcome = true;
  showMain = false;
  onHide = function(show:  boolean) {
    this.showWelcome = !show;
    this.showMain = true;
  };
  ngOnInit() {
    AOS.init({duration: 500});
  }
}
