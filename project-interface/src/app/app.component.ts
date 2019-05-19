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
  faction = null;
  onHide = function(show:  boolean) {
    this.showWelcome = !show;
    this.showMain = true;
  };
  changeFaction = function(faction: any) {
    this.faction = faction;
  };
  ngOnInit() {
    AOS.init({duration: 500});
  }
}
