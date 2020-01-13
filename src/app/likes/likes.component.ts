import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
    @Output() deletingQuotes = new EventEmitter<boolean>();
    numberOfLikes = 0;
    numberOfDislikes = 0;
    upVotes() {
      this.numberOfLikes++;
    }
    downVotes() {
      this.numberOfDislikes++;
    }
    deleteQuote(deleting: boolean) {
      this.deletingQuotes.emit(deleting);

    }
  constructor() { }

  ngOnInit() {
  }

}
