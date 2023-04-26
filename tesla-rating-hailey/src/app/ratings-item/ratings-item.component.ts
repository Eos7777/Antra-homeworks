import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-item',
  templateUrl: './ratings-item.component.html',
  styleUrls: ['./ratings-item.component.css'],
})
export class RatingsItemComponent implements OnInit {
  @Input('name') name: string;
  @Input('content') content: string;
  @Input('rate') rate: number;

  // constructor() { }

  ngOnInit() {}
}
