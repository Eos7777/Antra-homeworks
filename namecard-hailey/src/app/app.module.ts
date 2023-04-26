import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { CardService } from './card.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [CardComponent, ListComponent],
  providers: [CardService],
  // bootstrap: [AppComponent],
  exports: [ListComponent],
})
export class AppModule {}
