import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  @Input() book!: Book;
  @Output() idemiter = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  getName() {
    this.idemiter.emit(this.book);
  }
}
