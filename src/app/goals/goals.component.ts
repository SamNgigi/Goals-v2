import { Component, OnInit } from '@angular/core';
// We import the Goal class from Goal.ts
import { Goal } from "../Goal";
// We import the Quote class from Quote.ts
import { Quote } from "../Quote-class/Quote"
/* 
  We import the Goals_Array 
*/
import { Goals_Array } from "../Goals_Array";
// We import our GoalService
import { GoalService } from "./goal.service";
/* 
  We import the AlertsService.

  Because we registered this service in app.module.ts, we do not need
  to register it again in our @Component providers array.
*/
import { AlertsService } from "../alert-service/alerts.service";
// We import the quote request service
import { QuoteRequestService } from "../quote-service/quote-request.service";

import { Router } from "@angular/router";

/* 
  We can think of @Component as a TypeDecorator that marks a class a
  and Angular component and add meta-data about the component.

  Not how it is called just above the GoalComponent class.
*/

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  /* 
    We add a providers array to our component and register our
    service/injector.

    This is a case of local dependency injection whereby GoalService is just to be used/injected/available within the GoalComponent
    only.
  */
  providers: [GoalService, QuoteRequestService]
})
export class GoalsComponent implements OnInit {

  // today = "testing";

  // Here we updated the goal property and give it a type.
  goals: Goal[];

  // We declare our quote property of type Quote.
  quote: Quote;

  /* 
    We declare our testVarName property and type here because we will use it in our deleteGoal method.
  */
  testVarName: AlertsService;

  addNewGoal(goal) {
    // Giving our new goal the appropriate id.
    let goalsLength = this.goals.length;
    goal.id = goalsLength + 1;

    // Setting number of day to complete the goal.
    goal.completeDate = new Date(goal.completeDate);

    // Adding our new goal to the goal array.
    this.goals.push(goal)
  }

  // Going to view a specific goals

  goToUrl(id) {
    /* 
      On the router we injected we call the navigate method that
      takes in an array as an argument where the first item is the
      path and the second item is the id of the goal.

      Be careful to make sure that you name this path specifically goals. This is because it matches with the /goals path in the router module and in the navbar /goals routerLink. 
    */
    this.router.navigate(["/goals", id]);
  }

  /* 
    The completeGoal function. Note that it receives the isComplete which is an instance of the EventEmitter class.

    Below we replaced completeGoal with deleteGoal.
  */
  deleteGoal(index) {

    let confirmDelete = confirm(`Are you sure you want to delete ${this.goals[index].goal} goal.`);

    if (confirmDelete) {
      // Remove the item with this index from the goal array.
      this.goals.splice(index, 1);
      /* 
        Calling our AlertService method alertMe() that was assigned
        to the testVarName property.
      */
      this.testVarName.alertMe("Goal has been deleted");
    }

  }

  /* 
    A constructor is a special method which is used in the defining of new objects(classes). It is used to define the blueprint that instantiates object instances. 

    The constructor is run/executes before the ngOnInit is run.

    We now inject our constructor with our GoalService.

    We then also inject the AlertsService.

    To allow for our component to communicate with the quote api we use inject the HttpClient to our constructor.

    We update our constructor and inject our router of type router.
  */
  constructor(
    goalService: GoalService,
    alertService: AlertsService,
    private quoteRequestService: QuoteRequestService,
    private router: Router
  ) {
    // console.log("We are at the constructor.");
    /* 
      We call the getGoals method which returns our Goals_Array which we assign to our goals property.
    */
    this.goals = goalService.getGoals();
    // Making the service available to the whole class.
    this.testVarName = alertService;

    console.log(this.quote)
  }

  /* 
    ngOnInit is a life cycle hook function that is called
    immediately after a component is created. In fact it is used to
    indicate that a component has been completely initialized/created.

    It is called by Angular itself.

    So you can literally  take it to mean on initialization of a Angular component.
    */
  ngOnInit() {
    this.quoteRequestService.quoteRequest();
    this.quote = this.quoteRequestService.quote;
    console.log(this.quote)
  }

}
