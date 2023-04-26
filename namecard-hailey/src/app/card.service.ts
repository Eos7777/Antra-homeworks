import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Card, CardRoot } from './card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private url = 'https://reqres.in/api/users';
  constructor(private httpClient: HttpClient) {}

  public card$: BehaviorSubject<Card[]> = new BehaviorSubject([]);

  getInfo(): Observable<Card[]> {
    return this.httpClient.get<CardRoot>(this.url).pipe(
      map((data) => data.data),
      tap((data) => {
        this.card$.next(data);
      })
    );
  }
}
