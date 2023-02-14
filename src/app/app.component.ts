import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-App';

  scroll(id: string) {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
