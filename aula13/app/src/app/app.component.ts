import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isOpened = false;

  closeMenu(event: MouseEvent) {
    if (event.currentTarget === event.target) {
      this.isOpened = false;
    }
  }
}
