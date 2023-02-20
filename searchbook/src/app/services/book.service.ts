import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of, map, tap } from 'rxjs';
import { Book } from '../interfaces/book.interface';

@Injectable({ providedIn: 'root' })
export class BookService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  booklist: Book[] = [];
  booklist$: Subject<Book[]> = new Subject();

  wishlist: any = [];
  wishlist$: Subject<Book[]> = new Subject();

  constructor(private http: HttpClient) {}

  getBooks(bookName: string): Observable<Book[]> {
    if (bookName.trim() === '') {
      return of();
    }
    return this.http.get(this.baseUrl + bookName).pipe(
      tap((data) => console.log(data)),
      map((data: any) => {
        if (data.totalItems === 0) return [];
        return data.items.map((book: any) => ({
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors.join(','),
          publisher: book.volumeInfo.publisher,
          publishDate: book.volumeInfo.publishedDate,
          picture: book.volumeInfo.imageLinks?.thumbnail,
          description: book.volumeInfo.description,
        }));
      }),
      tap((books) => {
        this.booklist = books;
        this.booklist$.next(books);
      })
    );
  }

  duplicatebook(wbook: Book) {
    for (let book of this.wishlist) {
      if (JSON.stringify(wbook) === JSON.stringify(book)) {
        return true;
      }
    }
    return false;
  }

  addWishlist(book: Book) {
    if (this.duplicatebook(book) === false) {
      this.wishlist.push(book);
    }
    this.wishlist$.next(this.wishlist);
  }

  deleteWishlist(book: Book) {
    this.wishlist = this.wishlist.filter((bn: Book) =>
      bn ? JSON.stringify(book) !== JSON.stringify(bn) : false
    );
    this.wishlist$.next(this.wishlist);
  }
}
