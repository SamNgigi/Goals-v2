import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Note we import the FormsModule
import { FormsModule } from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailsComponent,
    StrikeThroughDirective,
    DateCountPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    // We add the Form module to the import array.
    FormsModule
  ],
  // Registering our AlertsService app wide.
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
