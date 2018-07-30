import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <h1>My Goal</h1>
    <p> My goals for the day is {{goal}}</p>
  `
})
export class AppComponent {
  title = 'the dopest app, by the most dopest developer in the the world.';
  goal = 'to conquer the world a second at a time.'
}
