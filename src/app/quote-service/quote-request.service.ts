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
      // Describing what we want our response to look like.
      quote: string;
      author: string;
      category: string;
    }

    // We create a new instance of a Promise
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.api_url).toPromise().then(response => {
        console.log(response);
        this.quote.quote = response.quote;
        this.quote.author = response.author;
        this.quote.category = response.category;

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
  }

}
