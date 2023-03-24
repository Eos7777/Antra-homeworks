import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchEmployeeService } from './service/search-employee.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [SearchComponent, ListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SearchEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
