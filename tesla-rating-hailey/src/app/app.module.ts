import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RatingsAverageComponent } from './ratings-average/ratings-average.component';
import { RatingsItemComponent } from './ratings-item/ratings-item.component';
import { RatingsListComponent } from './ratings-list/ratings-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AppComponent,
    RatingsAverageComponent,
    RatingsItemComponent,
    RatingsListComponent,
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}
