import { Component, Input, OnInit } from '@angular/core';
import { Employee, Fetched, Support } from '../employee';
import { SearchEmployeeService } from '../service/search-employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent implements OnInit {
  // @Input() dataToDisplay!: Employee[];
  public employees !: Employee[];

  constructor(private service: SearchEmployeeService) {}

  ngOnInit(): void {
    // this.service.getEmployees().subscribe((data) => {
    //   this.service.dataToDisplay = data;
    //   console.log("getEmployees printing data")
    //   console.log(data)
    // })

    // this.service.data$.subscribe((data) => {
    //   this.service.dataToDisplay = data;
    // })
    
    // console.log("List Component Printing data 1")
    // console.log(this.service.data)

    this.service.dataToDisplay$.subscribe((data) => {
      console.log("this service.datatodisplay printing employees")
      this.employees = this.service.dataToDisplay;
      console.log(this.employees)
    });

    // this.service.dataToDisplay = this.service.data;
    // console.log("List Component Printing data 2")
    // console.log(this.service.data)
    // console.log(this.service.dataToDisplay)

    
    // this.service.getEmployees().subscribe();
    // console.log("List Component Printing data 2")
    // console.log(this.employees)
  }

}
