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
    new Goal(1, "Identify of skills I want to master.", "Well for now its music, math and programming."),
    new Goal(2, "Mastery of skills.", "Not yet there."),
    new Goal(3, "Application of skills.", "I'll be applying while still getting better."),
    new Goal(4, "World domination.", "One day at a time."),
  ]

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
