/* 
  Imports allow us to import stuff from angular or other components or libraries
*/
import { Component } from '@angular/core';

/* 
  Below we have an @Component annotation. This allows us to add
  functionality to our code.

  We have the selector attribute to define a selector for our
  component. This allows us to pass our component into other
  components after imports.

  We also have a templateUrl that defines the path to the HTML file attached to this component.

  We also have the styleUrl defining the path to the css attached to this component
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* 
  Below we have the normal ES6 class that allows us to define the logic for our component. We then import this to the main app module typeScript file so that it can be usable app wide. 
*/
export class AppComponent {
  // Defining the methods and attributes that will be associated with the AppComponent.
}
