import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';
import { Subject } from 'rxjs';


@Component({
        selector: 'app-booklist',
        templateUrl: './booklist.component.html',
        styleUrls: ['./booklist.component.css']
})



export class BooklistComponent implements OnInit {
        // booklist$: Book[] = []
        // booklist: Book[] = [];
        booklist$: Subject<any> = new Subject();

        constructor(private bookService: BookService) { }

        ngOnInit(): void {
                // this.bookService.booklist$.subscribe((data: any) => {
                //         this.booklist = data;
                // })
                this.booklist$ = this.bookService.booklist$;
        }

        // ngOnInit(): void {
        //         this.bookService.booklist$.subscribe((data: any) => {
        //                 this.books = data;
        //         });
        // }
        // ngOnInit(): void {
        //         this.booklist$ = this.bookService.booklist$;
        // }

        // ngOnInit(): void {
        //         this.Bookservice.bookList$.subscribe((data: any) => {
        //                 this.bookList = data;
        //                 // console.log(this.bookList)
        //         })
        // }

        addBook(book: Book) {
                this.bookService.addBook(book);
                // if (book.addedToWishilist === false) {
                //         book.addedToWishilist = true;
                // }
        }
}