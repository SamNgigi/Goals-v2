import { Injectable } from '@angular/core';
// We import our Goals_Array.
import { Goals_Array } from "../Goals_Array";

/* 
  The @Injectable() decorator is essential in creating a service. 

  Angular uses it to define a service class that might require
  dependencies
*/

@Injectable({
  /* 
    providedIn specifies that the root injector is responsible for
    creating an instance of the GoalService and making it available
    throughout the application.
  */
  providedIn: 'root'
})
export class GoalService {
  /* 
    Our service does not require any dependencies yet. If it did they
    would be defined in the constructor.

    If we were fetching data from a remote server this process would
    have to be asynchronous.
  */

  getGoals() {
    return Goals_Array;
  }

  constructor() { }
}

/* 
  A service is just a class until it is registered with an Angular
  dependency injector.

  An Injector is responsible for creating the different service
  instances and injecting them into the relevant classes.

  They are created by Angular as it executes the app.

  We have to register our providers array in the app.module.ts or in
  the relevant component @Component annotation (Local Injection) with
  the Injector which informs the injector how to create a given
  service.

  The beauty of dependency injection( using services ) it allows us
  to assign variable, create functions that are particular to the
  individual dependencies/classes/services without worrying about
  breaking the main class that is consuming these
  classes/dependencies/services.
*/