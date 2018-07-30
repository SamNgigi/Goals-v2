import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the dopest app, by the most dopest developer in the the world.';
  today = 'Angular Content';
  goals: string[];

  constructor() {
    this.goals = ["Finish this weeks content", "Go through Angular documentation", "Practice practice practice"];
  }
}
