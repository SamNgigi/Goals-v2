// Note that we import the Input decorator/annotation.
import { Component, OnInit, Input } from '@angular/core';
// Import our class definition of a goal.
import { Goal } from "../Goal";

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  /* 
    We use the Input decorator that allows us to access the
    properties within the parent component.

    Here we define the goal and denote that it will be a of the Goal
    class type.

    Now all that remains is to display the description here in the goal-details html.
  */
  @Input() goal: Goal;
  constructor() { }

  ngOnInit() {
  }

}
