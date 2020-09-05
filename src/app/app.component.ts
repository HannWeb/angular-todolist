import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'HannOS';

  constructor() {
    this.changeName('Tech Solutions');
    console.log(this.name);
  }

  changeName(name: string): void {
    this.name = name;
  }
}
