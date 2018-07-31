import { Component, OnInit } from '@angular/core';
// Note we import the Goal class.
import { Goal } from "../Goal";


@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  /* 
    Creating a new instance of the Goal class.

    This newGoal will be a default object that will be changed by the
    form inputs.
  */
  newGoal = new Goal(0, "", "", new Date());

  constructor() { }

  ngOnInit() {
  }

}
