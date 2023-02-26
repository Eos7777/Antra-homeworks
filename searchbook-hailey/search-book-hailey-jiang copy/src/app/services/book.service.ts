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


  // my getbook 
  // getBooks(bookname: string) {
  //   if (bookname.trim() === '') return of(0);
  //   return this.http.get(this.baseUrl + bookname)
  //     .pipe(tap((response: any) => {
  //       this.booklist = response.items;
  //       this.booklist$.next(this.booklist)
  //     }));
  // }


  // not my getBook
  // getBooks(bookName: string): Observable<Book[]> {
  //   if (bookName.trim() === '') {
  //     return of();
  //   }
  //   return this.http.get(this.baseUrl + bookName).pipe(
  //     tap((data) => console.log(data)),
  //     map((data: any) => {
  //       if (data.totalItems === 0) return [];
  //       return data.items.map((book: any) => ({
  //         title: book.volumeInfo.title,
  //         author: book.volumeInfo.authors.join(','),
  //         publisher: book.volumeInfo.publisher,
  //         publishDate: book.volumeInfo.publishedDate,
  //         picture: book.volumeInfo.imageLinks?.thumbnail,
  //         description: book.volumeInfo.description,
  //       }));
  //     }),
  //     tap((books) => {
  //       this.booklist = books;
  //       this.booklist$.next(books);
  //     })
  //   );
  // }



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

  // getBooks(name:string){
  //   if(name.trim() !== ''){
  //     return this.http.get<apiData>(baseUrl + name).pipe(
  //       tap((data) =>{
  //         this.bookList = data.items.map((each:any)=>{
  //           return {
  //             pickture: each.volumeInfo.imageLinks.smallThumbnail ? each.volumeInfo.imageLinks.smallThumbnail: '',
  //             name: each.volumeInfo.title ? each.volumeInfo.title: '',
  //             publisher: each.volumeInfo.publisher ? each.volumeInfo.publisher: '',
  //             data: each.volumeInfo.publishedDate ? each.volumeInfo.publishedDate: '',
  //             description: each.volumeInfo.description ? each.volumeInfo.description: '',
  //           }
  //         })
  //         this.bookList$.next(this.bookList);
  //         console.log(this.bookList);
  //       }),
  //       catchError((err : any) =>{
  //         console.log(err);
  //         return err
  //       })
  //     )
  //   }
  //   return of(0);
  // }

  // getBooks(bookname: string) {
  //   if (bookname.trim() === '') return of(0);
  //   return this.http.get(this.baseUrl + bookname)
  //   .pipe(tap((response: any) => {
  //     this.booklist = response.items;
  //     this.booklist$.next(this.booklist)
  //   }));
  // }



  // duplicatebook(wbook: Book) {
  //   for (let book of this.wishlist) {
  //     if (JSON.stringify(wbook) === JSON.stringify(book)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }


  // addWishList(book: Book) {
  //   this.wishlist.push(book);
  //   this.wishlist$.next(this.wishlist);
  //   // console.log(this.wishlist);
  // }

  // addBook(bookid: string) {
  //   const book = this.booklist.find((item: any) => item.id === bookid);
  //   if (!this.wishlist.find((item: any) => item.id === bookid)) {
  //     this.wishlist.push(book);
  //     this.wishlist$.next(this.wishlist)
  //   }
  // }

  // addWishList(book: wishBook){
  //   this.wishList.push(book);
  //   return this.wishList$.next(this.wishList);
  // }


  //my addBook
  // addBook(id: string) {
  //   // this.wishlist.push(book);
  //   // this.wishlist$.next(this.wishlist);

  //   if (book.addedToWishilist == false) {
  //     book.addedToWishilist = true;
  //     this.wishlist.push(book);
  //     this.wishlist$.next(this.wishlist);
  //   }
  // }

  addBook(bookid: string) {
    const book = this.wishlist.find((item: any) => item.id === bookid);
    if (!this.wishlist.find((item: any) => item.id === bookid)) {
      this.wishlist.push(book);
      this.wishlist$.next(this.wishlist)
    }
  }




  // deleteWishlist(book: Book) {
  //   this.wishlist = this.wishlist.filter((bn: Book) =>
  //     bn ? JSON.stringify(book) !== JSON.stringify(bn) : false
  //   );
  //   this.wishlist$.next(this.wishlist);
  // }

  // deleteWishlist(book: Book) {
  //   this.wishlist = this.wishlist.filter((b: Book) => {
  //     if (b.id === book.id) {
  //       b.onWishlist = false;
  //     }
  //     return b.id !== book.id;
  //   });
  //   return this.wishlist$.next(this.wishlist);
  // }

  // removeBook(bookid: string) {
  //   this.wishlist = this.wishlist.filter((item: any) => item.id !== bookid);
  //   this.wishlist$.next(this.wishlist)
  // }

  // deleteWishList(name: string){
  //   this.wishList = this.wishList.filter((data:wishBook)=>{
  //     return data.name !== name;
  //   });
  //   return this.wishList$.next(this.wishList);
  // }




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
