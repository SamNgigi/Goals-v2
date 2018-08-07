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
import { HttpClient } from '@angular/common/http';
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
  providers: [GoalService]
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

  /* 
    The completeGoal function. Note that it receives the isComplete which is an instance of the EventEmitter class.

    Below we replaced completeGoal with deleteGoal.
  */
  deleteGoal(isComplete, index) {
    // If true
    if (isComplete) {
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

    The constructor is run/executes before the ngOnInit is run.

    We now inject our constructor with our GoalService.

    We then also inject the AlertsService.

    To allow for our component to communicate with the quote api we use inject the HttpClient to our constructor.
  */
  constructor(goalService: GoalService, alertService: AlertsService, private http: HttpClient) {
    // console.log("We are at the constructor.");
    /* 
      We call the getGoals method which returns our Goals_Array which we assign to our goals property.
    */
    this.goals = goalService.getGoals();
    // Making the service available to the whole class.
    this.testVarName = alertService;
  }

  /* 
    ngOnInit is a life cycle hook function that is called
    immediately after a component is created. In fact it is used to
    indicate that a component has been completely initialized/created.

    It is called by Angular itself.

    So you can literally  take it to mean on initialization of a Angular component.
    */
  ngOnInit() {
    // console.log("We are at the ngOnInit stage.");

    /* 
      So when an api is successful the HttpClient module converts the response into an
      object but does not specify that type of object it is.

      We tell the HttpClient what type of objects we are expecting by defining an interface.

      In this case we define an interface called ApiResponse and describe the properties
      that we need from the response.
    */

    interface ApiResponse {
      quote: string;
      author: string;
      cat: string;
    }
    /* 
      We then pass the interface with the get Method

      Note that the "http" in this.http.get is the property that we
      assigned to HttpClient when injecting to the constructor.

      So here we are basically we want to get a response from our api call.

      We call the subscribe function that takes in the data function that is called when
      the API request is successful and returns a response.

      Note: the data function can be called anything.

      We create a new instance of the Quote class and pass in the properties from the
      response as defined by our interface.
      
      We assign the new class instance (object) to the quote property.

    */
    this.http.get<ApiResponse>("https://talaikis.com/api/quotes/random/").subscribe(data => {
      // We log the response stored in data returned from api call if successful.
      console.log(data);
      this.quote = new Quote(data.quote, data.author, data.cat);
    })
  }

}
