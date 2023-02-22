import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class PortfolioHomeComponent implements OnInit {
  play: boolean = false;
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 300);
  }
}
