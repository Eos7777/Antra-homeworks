import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, EmptyError } from 'rxjs';
import { Employee } from '../employee';
import { SearchEmployeeService } from '../service/search-employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  public form!: FormGroup;

  // constructor(private http: HttpClient) {}
  constructor(private fb: FormBuilder, private service: SearchEmployeeService) {};

  employees!: Employee[];
  filteredEmployees!: Employee[];

  get search(){
    return this.form.get('search');
  };


  // searchTerm: string = '';
  // previousSearchTerm: string = '';

  // employees: Employee[] = [];
  // filteredEmployees: Employee[] = [];

  ngOnInit() {
    this.form = this.fb.group({
      search: ['']
    })

    this.search?.valueChanges.pipe(debounceTime(1000)).subscribe((data) => {
      this.service.getSearchResult(data);
    })
      // console.log("SearchComponent printing employees")
      // console.log(this.employees);
  }
}
