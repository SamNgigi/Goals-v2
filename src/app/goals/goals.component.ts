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

    Note that the date object created with months starting from 0. i.e January = 0, December = 11 
  */
  goals = [
    new Goal(1, "Identify skills to be mastered.", "Well for now its music, math and programming.", new Date(2018, 6, 31)),
    new Goal(2, "Mastery of skills.", "Not yet but getting there.", new Date(2018, 8, 8)),
    new Goal(3, "Application of skills.", "I'll be applying while still getting better.", new Date(2018, 8, 15)),
    new Goal(4, "World domination.", "One day at a time.", new Date(2018, 9, 14)),
    new Goal(5, "Test", "This is just testing Event Emitting and Output binding.", new Date(2018, 10, 5)),
  ]

  /* 
    The completeGoal function. Note that it receives the isComplete which is an instance of the EventEmitter class.

    Below we replaced completeGoal with deleteGoal.
  */
  deleteGoal(isComplete, index) {
    // If true
    if (isComplete) {
      let confirmDelete = confirm(`Are you sure you want to delete ${this.goals[index].name} goal.`)

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
