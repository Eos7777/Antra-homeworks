import { Component, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { Subject } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
        selector: 'app-wishlist',
        templateUrl: './wishlist.component.html',
        styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
        wishlist$: Subject<Book[]> = new Subject();
        // wishlist$: Subject<any> = new Subject();

        constructor(private bookService: BookService) { }

        ngOnInit(): void {
                this.wishlist$ = this.bookService.wishlist$;
        }

        deleteBook(book: Book){
                this.bookService.deleteBook(book);
        }
}