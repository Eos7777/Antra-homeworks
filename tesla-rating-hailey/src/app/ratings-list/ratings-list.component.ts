import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../../rating';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css'],
})
export class RatingsListComponent implements OnInit {
  @Input('ratingList')
  ratingList: Rating[];

  constructor() {}

  ngOnInit() {}
}
