import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, of, map, tap, catchError } from 'rxjs';
import { Book } from '../interfaces/book.interface';


@Injectable({
  providedIn: 'root',
})

export class BookService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  booklist: Book[] = [];
  booklist$: Subject<Book[]> = new Subject();

  wishlist: any[] = [];
  wishlist$: Subject<Book[]> = new Subject();

  constructor(private http: HttpClient) { }

  getBooks(bookname: string) {
    if (bookname.trim() === '') { return of(0); }

    return this.http.get(this.baseUrl + bookname).pipe(
      tap((response: any) => {
        this.booklist = response.items.map((item: any) => {
          return {
            id: item.id,
            picture: item.volumeInfo.imageLinks?.thumbnail || '',
            bookName: item.volumeInfo.title || '',
            author: item.volumeInfo.authors || [],
            publisher: item.volumeInfo.publisher || '',
            publishedDate: item.volumeInfo.publishedDate || '',
            description: item.volumeInfo.description || '',
            addedToWishilist: false,
          }
        });
        this.booklist$.next(this.booklist);
        console.log(this.booklist);
      }),
      catchError((err: any) => {
        console.log(err);
        return err;
      })
    );
  }


  //my addBook
  addBook(book: Book) {
    // this.wishlist.push(book);
    // this.wishlist$.next(this.wishlist);

    if (book.addedToWishilist == false) {
      book.addedToWishilist = true;
      this.wishlist.push(book);
      this.wishlist$.next(this.wishlist);
    }
  }

  // my deleteBook
  deleteBook(targetBook: Book) {
    this.wishlist = this.wishlist.filter((book: Book) => {
      if (book.bookName === targetBook.bookName) {
        book.addedToWishilist = false;
      }
      return book.bookName !== targetBook.bookName;
    });
    return this.wishlist$.next(this.wishlist);
  }

}
