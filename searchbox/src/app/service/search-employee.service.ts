import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, tap } from 'rxjs';
import { Employee, Fetched, Support } from '../employee';

@Injectable({
  providedIn: 'root'
})

export class SearchEmployeeService {

  public url: string = "https://reqres.in/api/users?page=2";
  public data$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);
  public data!: Employee[];
  public sortedData!: Employee[];

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Fetched>(this.url).pipe(
      map((data: Fetched) => {
        return data.data;
      }),
      tap((data: Employee[]) => {
        data.sort((p1: Employee, p2: Employee) =>
          p1.last_name < p2.last_name ? -1 : p1.last_name > p2.last_name ? 1 : 0
        );
        this.data = data;
        this.data$.next(data);
        this.sortedData = data;
        return this.sortedData;
      })
    )
  }

  getSearchResult(searchTerm: string) {
    var filteredEmployees: Employee[] = [];
      return this.data;
      // filteredEmployees = this.data.filter((data) => {
      //   return data.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || data.last_name.toLowerCase().includes(searchTerm.toLowerCase());
      // })
    this.data$.next(filteredEmployees);
  }
}
