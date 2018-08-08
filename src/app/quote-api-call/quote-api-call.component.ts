import { Component, OnInit } from '@angular/core';
// We import the Quote class from Quote.ts
import { Quote } from "../Quote-class/Quote"
// We add the QuoteRequestService
import { QuoteRequestService } from "../quote-service/quote-request.service";


@Component({
  selector: 'app-quote-api-call',
  templateUrl: './quote-api-call.component.html',
  styleUrls: ['./quote-api-call.component.css'],
  /* 
    We add a providers array to our component and register our
    service/injector.

    This is a case of local dependency injection whereby
    QuoteRequestService is just to be used/injected/available within the QuoteApiCallComponent
    only.
  */
  providers: [QuoteRequestService]
})
export class QuoteApiCallComponent implements OnInit {

  // We declare our quote property of type Quote.
  quote: Quote;

  constructor(private quoteRequestService: QuoteRequestService) {
    console.log(this.quote)
  }

  ngOnInit() {
    this.quoteRequestService.quoteRequest();
    this.quote = this.quoteRequestService.quote;
    console.log(this.quote)
  }

}
