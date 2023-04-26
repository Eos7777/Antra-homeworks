import { Component } from '@angular/core';
import { Address } from './address';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  submittedForms: Address[] = [];
  // defaultAddress: Address = {};

  defaultAddress: Address = {
    name: 'Hailey',
    address: '1600 Pennsylvania Avenue',
    zipcode: 20500,
    state: 'DC',
    country: 'USA',
    phone: 1219991234,
    email: 'thewhitehouse@gov.com',
  };

  onFormSubmit(newSubmittedForm: Address) {
    this.submittedForms.push(newSubmittedForm);
  }
}
