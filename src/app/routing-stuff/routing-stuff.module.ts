import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// We import the router module
import { RouterModule, Routes } from "@angular/router";
// We import the the component
import { GoalsComponent } from "../goals/goals.component";
import { AboutComponent } from "../about/about.component";
import { FourOFourComponent } from "../four-o-four/four-o-four.component";


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
