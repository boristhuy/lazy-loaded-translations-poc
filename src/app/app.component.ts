import {Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appLoaded = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/') {
          this.appLoaded = false;
        }

        if (event.url === '/tasks') {
          this.appLoaded = true;
        }
      }
    });
  }
}
