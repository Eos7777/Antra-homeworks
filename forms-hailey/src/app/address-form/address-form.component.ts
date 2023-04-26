import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Address } from '../address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  @Input('formData') formData: Address;
  @Output() Submit = new EventEmitter<Address>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      // ? means this property is optional;
      name: [this.formData?.name, [Validators.required]],
      address: [this.formData?.address, Validators.required],
      zipcode: [this.formData?.zipcode, Validators.required],
      state: [this.formData?.state, Validators.required],
      country: [this.formData?.country, Validators.required],
      phone: [this.formData?.phone, Validators.required],
      email: [this.formData?.email, [Validators.required]],
      // name: [this.formData.name, [Validators.required]],
      // address: [this.formData.address, Validators.required],
      // zipcode: [this.formData.zipcode, Validators.required],
      // state: [this.formData.state, Validators.required],
      // country: [this.formData.country, Validators.required],
      // phone: [this.formData.phone, Validators.required],
      // email: [this.formData.email, [Validators.required]],
    });
  }

  onSubmit() {
    this.Submit.emit(this.form.value);
  }
}
