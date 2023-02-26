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
        @Input() book!: Book;
        // wishlist: Subject<Book[]> = new Subject();
        wishlist: Book[] = [];
        // wishlist$: Subject<any> = new Subject();

        constructor(private bookService: BookService) { }

        ngOnInit(): void {
                this.bookService.wishlist$.subscribe((data: any) => {
                        this.wishlist = data;
                      })

                // this.wishlist = this.bookService.wishlist$;
        }

        deleteBook(book: Book){
                this.bookService.deleteBook(book);
        }
}