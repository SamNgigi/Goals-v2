import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  alertMe(message: string) {
    alert(message)
  }

  constructor() { }
}

/* 
  Since we want to use this service app wide/globally we register it
  in the @ngModules decorator's providers array in our app.module.ts
  file.
*/