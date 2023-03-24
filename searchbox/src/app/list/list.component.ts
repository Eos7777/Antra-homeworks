import { Component, Input, OnInit } from '@angular/core';
import { Employee, Fetched, Support } from '../employee';
import { SearchEmployeeService } from '../service/search-employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent implements OnInit {
  // @Input() employee!: Employee;
  public employees !: Employee[];

  constructor(private service: SearchEmployeeService) {}

  ngOnInit(): void {
    console.log("In List Component")
    this.service.dataToDisplay$.subscribe((data) => {
      this.employees = data;
    })
    // this.service.getEmployees().subscribe();
    console.log("List Component Printing data")
    console.log(this.employees)
  }
}