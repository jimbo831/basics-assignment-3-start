import { Component } from '@angular/core';
import {ClickComponent} from './click/click.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  clicks = [];

  toggleDisplay() {
    this.clicks.push(new ClickComponent());
    this.display = !this.display;
  }
}
