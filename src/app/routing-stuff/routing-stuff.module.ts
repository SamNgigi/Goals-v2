import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// We import the router module
import { RouterModule, Routes } from "@angular/router";
// We import the the component
import { GoalsComponent } from "../goals/goals.component";
import { AboutComponent } from "../about/about.component";
import { FourOFourComponent } from "../four-o-four/four-o-four.component";
import { GoalDetailsComponent } from '../goal-details/goal-details.component';


/* 
  Defining the routes/paths to different endpoints.

  The routes array determines how we navigate through our project.

  Each route maps the path to the component it is to display.

  We can create a routing module to handle all routing functionality.

  This is a design choice to minimize complexity as our app grows
  larger.
*/
const routes: Routes = [
  { path: "goals", component: GoalsComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/goals", pathMatch: "full" },
  /* 
    We can actually define a route to a specific goal using the
    syntax below.

    We create a new route that has an :id token in the path allowing a slot for a route id parameter.

    We will then insert an id of the goal to retrieve that specific goal.

    We will need to make some changes to our templates.
    A
  */
  { path: "goals/:id", component: GoalDetailsComponent },
  { path: "**", component: FourOFourComponent }
]

@NgModule({
  imports: [
    CommonModule,
    // Registering the routes array into RouterModule 
    RouterModule.forRoot(routes)
  ],
  // We create an export array and place the RouterModule there.
  exports: [RouterModule],
  declarations: []
})
export class RoutingStuffModule { }
