import {Component, Input, OnInit} from '@angular/core';
import {BookData} from "../books.type";

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {
  @Input() data: BookData = {
    addedAt: 1231,
    author: 'Some Ting Wong',
    length: 2378,
    title: 'The regressed demon lord is kind',
    type: 'web',
    img: '/assets/download.avif'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
