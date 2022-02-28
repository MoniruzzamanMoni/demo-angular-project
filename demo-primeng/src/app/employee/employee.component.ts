import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './employee';
import { ColDef } from 'ag-grid-community';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployees: string[] = [];
  constructor(
    private employeeService: EmployeeService, 
    private stateService: StateService, 
    private router: Router
  ) { }

  ngOnInit() {
      this.employeeService.getEmployees()
      .subscribe(
        (response) => this.employees = response 
      );

  }

  goDetails(data: Employee) {
    console.log(data);
    this.router.navigate(['/employee-details'], 
        { queryParams: { details: JSON.stringify(data) }});
  }

  goDetailsByState(data: Employee) {
    console.log(data);
    this.router.navigate(['/employees/employee/'+data.id], 
        { state: { details: data }});
  }

  goDetailsByStateService(data: Employee) {
    this.stateService.setData(data);
    this.router.navigate(['/employees/employee/'+data.id]);
  }
  

  goDetailsByResolveGuard(data: Employee) {
    this.router.navigate(['/employees/employee/'+data.id]);
  }

}
