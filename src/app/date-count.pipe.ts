import { Pipe, PipeTransform } from '@angular/core';

// The Pipe decorator
@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(due_date: any, args?: any): number {

    // get current date and time
    let today: Date = new Date();

    // Today in year, month, day format.
    let today_with_no_time: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    // Returns due_date in milliseconds
    let date_difference = Math.abs(due_date - today_with_no_time);

    // Converts the milliseconds to seconds
    let date_difference_in_seconds = date_difference * 0.001;

    // Seconds in a day
    const seconds_in_a_day = 86400;

    // Remaining days to due date.
    let date_count = date_difference_in_seconds / seconds_in_a_day;

    // Return date_count.
    if (date_count >= 1) {
      return date_count;
    }
    // Else return 0
    return 0;


  }

}
