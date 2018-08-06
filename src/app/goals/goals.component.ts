import { Component, OnInit } from '@angular/core';
// We import the Goal class from Goal.ts
import { Goal } from "../Goal";
/* 
  We import the Goals_Array 
*/
import { Goals_Array } from "../Goals_Array";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  // today = "testing";

  // We assign the our imported Goals_Array to the goals property

  goals = Goals_Array

  addNewGoal(goal) {
    // Giving our new goal the appropriate id.
    let goalsLength = this.goals.length;
    goal.id = goalsLength + 1;

    // Setting number of day to complete the goal.
    goal.completeDate = new Date(goal.completeDate);

    // Adding our new goal to the goal array.
    this.goals.push(goal)
  }

  /* 
    The completeGoal function. Note that it receives the isComplete which is an instance of the EventEmitter class.

    Below we replaced completeGoal with deleteGoal.
  */
  deleteGoal(isComplete, index) {
    // If true
    if (isComplete) {
      let confirmDelete = confirm(`Are you sure you want to delete ${this.goals[index].goal} goal.`)

      if (confirmDelete) {
        // Remove the item with this index from the goal array.
        this.goals.splice(index, 1)
      }
    }
  }


  // The toggleDetails function.

  toggleDetails(index) {
    /* 
      Cont from goal.component.html

      Here then we are actually toggling between checking if it is true that it is false to is it false that it is false.
    */
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }


  /* 
    A constructor is a special method which is used in the defining of new objects(classes). It is used to define the blueprint that instantiates object instances. 

    The constructor is run before the ngOnInit is run.
  */

  constructor() {
    console.log("We are at the constructor.");
  }

  /* 
    ngOnInit is a life cycle hook function that is called
    immediately after a component is created. In fact it is used to
    indicate that a component has been completely initialized/created.

    It is called by Angular itself.

    So you can literally  take it to mean on initialization of a Angular component.
    */
  ngOnInit() {
    console.log("We are at the ngOnInit stage.");
  }

}
