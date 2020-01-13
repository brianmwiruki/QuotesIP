import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [new Quotes('The ability to move on is directly proportional to our measure of optimism', 'Bryan Mwiruki', 'Bryan M', new Date(2019, 8, 14))];
  addAquote(quote) {
    const quotesInfo = this.quotes.length;
    quote.id = quotesInfo + 1;
    quote.Date = new Date(quote.Date);
    this.quotes.push(quote);
  }
  quotusDeletus(deletingQuotes, index) {
    if (deletingQuotes) {
      const deleteConfirm = confirm(`Delete Quote by: ${this.quotes[index].author}?`);
      if (deleteConfirm) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
