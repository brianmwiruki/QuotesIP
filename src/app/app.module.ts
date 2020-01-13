import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TimeCountPipe } from './time-count.pipe';
import { LikesComponent } from './likes/likes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteHighlightDirective } from './quote-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    TimeCountPipe,
    LikesComponent,
    QuotesFormComponent,
    QuoteHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
