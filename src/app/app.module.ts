import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikeThroughDirective } from './StrikeThrough.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailsComponent,
    StrikeThroughDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
