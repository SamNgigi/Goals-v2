import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Note we import the FormsModule
import { FormsModule } from "@angular/forms";
// We import the HttpClientModule
import { HttpClientModule } from "@angular/common/http";
/* 
  We import the progress bar and the http progress bar that will automatically create a progress bar when the HttpClient is called.
*/
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpModule } from "@ngx-progressbar/http";
// We add the router modules
import { RouterModule, Routes } from "@angular/router";

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
    We use the ** to describe a wildcard route. This means any
    undefined path/route.
  */
  { path: "**", component: FourOFourComponent }
]

// Components
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
// Directive
import { StrikeThroughDirective } from './StrikeThrough.directive';
// Pipe
import { DateCountPipe } from './date-count.pipe';
import { AlertsService } from './alert-service/alerts.service';
import { QuoteApiCallComponent } from './quote-api-call/quote-api-call.component';
import { AboutComponent } from './about/about.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailsComponent,
    StrikeThroughDirective,
    DateCountPipe,
    GoalFormComponent,
    QuoteApiCallComponent,
    AboutComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    // We add the Form module to the import array.
    FormsModule,
    // We add the HttpClientModule.
    HttpClientModule,
    // We add the Normal progress bar.
    NgProgressModule.forRoot(),
    // We add the progress bar that is triggered on http requests
    NgProgressHttpModule,
    // We add the RouterModule to the import array
    RouterModule.forRoot(routes)
  ],
  // Registering our AlertsService app wide.
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
