import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Note we import the FormsModule
import { FormsModule } from "@angular/forms";
// We import the HttpClientModule
import { HttpClientModule } from "@angular/common/http";
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

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailsComponent,
    StrikeThroughDirective,
    DateCountPipe,
    GoalFormComponent,
    QuoteApiCallComponent
  ],
  imports: [
    BrowserModule,
    // We add the Form module to the import array.
    FormsModule,
    // We add the HttpClientModule here too.
    HttpClientModule
  ],
  // Registering our AlertsService app wide.
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
