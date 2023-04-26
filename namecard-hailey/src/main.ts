import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CardComponent } from './app/card/card.component';
import { CardService } from './app/card.service';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app/app.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AppModule],
  providers: [CardService],
  template: `
   <app-list />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
