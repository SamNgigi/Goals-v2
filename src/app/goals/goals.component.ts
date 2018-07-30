import { Component, OnInit } from '@angular/core';
// We import the Goal class from Goal.ts
import { Goal } from "../Goal";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  // today = "testing";

  /* 
    Creating instances of the Goal class and stored them in the
    goals array.
  */
  goals = [
    new Goal(1, "Identify of skills I want to master."),
    new Goal(2, "Mastery of skills."),
    new Goal(3, "Application of skills."),
    new Goal(4, "World domination."),
  ]

  constructor() { }

  ngOnInit() {
  }

}
