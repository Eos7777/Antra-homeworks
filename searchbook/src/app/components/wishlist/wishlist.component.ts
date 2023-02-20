import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  @Input() wbook!: Book;
  @Output() idemiter = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  deleteName() {
    this.idemiter.emit(this.wbook);
  }
}
