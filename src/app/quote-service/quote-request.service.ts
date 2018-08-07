import { Injectable } from '@angular/core';
// We import HttpClient
import { HttpClient } from "@angular/common/http";
// We import environment so that we access our api url
import { environment } from "../../environments/environment";
// We import our Quote class blue print.
import { Quote } from "../Quote-class/Quote";

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  // We declare property quote of type Quote.
  quote: Quote;

  constructor(private http: HttpClient) {
    // We instantiate an quote object that is empty at first.
    this.quote = new Quote("", "", "");

  }

  quoteRequest() {
    interface ApiResponse {
      // Describing what our response looks like.
      quote: string;
      author: string;
      /* 
        It should be cat here not category because the api calls it
        at not category.
      */
      cat: string;

      /* 
        So basically the ApiResponse interface defines like what we
        want from an response. Where we want just some properties or
        all the properties.
      */
    }

    // We create a new instance of a Promise
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.api_url).toPromise().then(response => {
        // console.log(response);
        this.quote.quote = response.quote;
        this.quote.author = response.author;
        // Should be response.cat not response.category
        this.quote.category = response.cat;

        resolve();
      },
        error => {
          this.quote.quote = "Never, never, never, never, never give up.";
          this.quote.author = "Winston Churchill";
          this.quote.category = "Inspirational";

          reject(error);
        });
    });

    return promise
    // console.log(promise);// Not returning anything.
  }

}
