//2.16
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, mergeMap, Subscription } from 'rxjs';
import { BookService } from '../../services/book.service';
import { debounceTime } from 'rxjs/operators';
import { Book } from '../../interfaces/book.interface';

@Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
        bookName: string = '';
        subsq = new Subscription();
        @ViewChild('inputbook', { static: true }) inputbox!: ElementRef;
        
        constructor(private bookService: BookService) { }


        ngOnInit(): void {
                this.subsq = fromEvent(this.inputbox.nativeElement, 'keyup').pipe(
                        debounceTime(500),
                        mergeMap((_) => {
                                return this.bookService.getBooks(this.bookName)
                        })
                )
                        .subscribe()
        }


        ngOnDestroy(): void {
                this.subsq.unsubscribe();
        }

}
