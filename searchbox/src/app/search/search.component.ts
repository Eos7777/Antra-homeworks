import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, EmptyError } from 'rxjs';
import { Employee } from '../employee';
import { SearchEmployeeService } from '../service/search-employee.service';
//This line imports the SearchEmployeeService class from a local file called 
// search-employee.service.ts. This service is used to make HTTP requests to the backend API to retrieve employee data.

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  public form!: FormGroup;
  //This line declares a public property called form that is of type FormGroup. This property is used to store the form data that is collected from the user.
  
  constructor(private fb: FormBuilder, private service: SearchEmployeeService) {};
  // This block of code defines the component's constructor and injects the FormBuilder and SearchEmployeeService dependencies.

  employees!: Employee[];
  //This line declares a public property called employees 
  //that is of type Employee[]. This property is used to 
  //store the employee data that is retrieved from the backend API.

  filteredEmployees!: Employee[];

  get search(){
    return this.form.get('search');
  };
  //This block of code defines a get accessor method called search that returns the search field from the form property.


  ngOnInit() {
    
    this.form = this.fb.group({
      search: ['']
    })

    this.service.getEmployees().subscribe((data) => {
    })
  
    this.search?.valueChanges.pipe(debounceTime(1000)).subscribe((searchTerm) => {
      this.service.getSearchResult(searchTerm);
    })
  }

  //This block of code defines the ngOnInit()method, which is called when the component is initialized. 
  // This method initializes theformproperty with a default value for the `search` field, makes an HTTP 
  // request to the backend API to retrieve the employee data, and sets up an observable
}
