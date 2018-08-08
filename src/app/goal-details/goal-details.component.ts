// Note that we import the Input decorator/annotation.
/* 
  Note that we also have imported the Output decorator and the
  EventEmitter constructor. 
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Import our class definition of a goal.
import { Goal } from "../Goal";
// We import the ActivatedRoute and ParamMap
import { ActivatedRoute, ParamMap } from "@angular/router";
// We import the Goal Service
import { GoalService } from "../goal-service/goal.service";

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css'],
  providers: [GoalService]
})
export class GoalDetailsComponent implements OnInit {

  paramMap: ParamMap;
  /* 
    We use the Input decorator that allows us to access the
    properties within the parent component.

    Here we define the goal and denote that it will be a of the Goal
    class type.

    Now all that remains is to display the description here in the goal-details html.
    */
  @Input() goal: Goal;

  /* 
    Below we get a sense that the Output isComplete is an 
    new instance of the EventEmitter object/(class).
  */
  @Output() isComplete = new EventEmitter<boolean>()

  /* 
    We then define our goalComplete method that takes in complete of type boolean as a parameter.

    Inside it we call the emit method on the isComplete EventEmitter object. This passes this event to the parent. 

    We see that the emit method takes in the complete boolean as an arg.

    Below we replace the goalComplete function with goalDelete.
  */

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor(private route: ActivatedRoute, private goalService: GoalService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.goal = this.goalService.getSpecificGoal(id);
  }

}
