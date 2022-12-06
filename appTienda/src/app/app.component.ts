import { Component } from '@angular/core';

@Component({
  selector: 'toz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'appTienda';
  expanded = true;

  toggleExpanded(expanded: boolean) {
    this.expanded = expanded;
  }
}
