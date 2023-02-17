import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-App';
  menu = false;

  scroll(id: string) {
    this.menu = false;
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  showMenu() {
    this.menu = !this.menu;
  }
}
