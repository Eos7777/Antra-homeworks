import { Component, OnInit } from '@angular/core';
import { Card } from '../card.interface';
import { CardService } from '../card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private cardService: CardService) {}

  list: Card[] = [];

  ngOnInit() {
    this.cardService.getInfo().subscribe();
    this.cardService.card$.subscribe((data: Card[]) => {
      this.list = data;
      console.log('in ListComponent printing list data');
      console.log(this.list);
    });
  }
}
