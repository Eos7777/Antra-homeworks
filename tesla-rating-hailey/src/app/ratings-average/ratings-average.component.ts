import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../../rating';

@Component({
  selector: 'app-ratings-average',
  templateUrl: './ratings-average.component.html',
  styleUrls: ['./ratings-average.component.css'],
})
export class RatingsAverageComponent implements OnInit {
  @Input('ratingList')
  ratingList: Rating[];

  private sum = 0;
  public avg = 0;

  // constructor() {}

  ngOnInit() {
    this.ratingList.forEach((rating) => {
      this.sum += rating.rate;
    });
    this.avg = Math.floor(this.sum / this.ratingList.length);
  }
}
