import { Component, OnInit } from '@angular/core';
import { Rating } from '../rating';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ratingList: Rating[] = [
    {
      name: 'React',
      content: 'Material UI, Redux Tookit',
      rate: 4.3,
    },
    {
      name: 'Angular',
      content: 'Angular Material, Ngrx',
      rate: 3.8,
    },
    {
      name: 'Vue',
      content: 'Material UI, Redux',
      rate: 4.1,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
