// Note that we import the Output decorator and the EventEmitter Class.
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  /* 
    After importing the Output and EventEmitter functions we create a
    an new event emitter object addGoal of type Goal.
  */

  @Output() addGoal = new EventEmitter<Goal>();

  /* 
    We then create the submitGoal function where we call the emit method and pass in the newGoal object.

    So now when the submit button is clicked the submitGoal function is called and the newGoal that has the properties from the form is emitted to the parent component.
  */

  submitGoal() {
    // alert("Working");
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit() {
  }

}
