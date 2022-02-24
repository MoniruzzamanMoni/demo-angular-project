import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-item-list',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
      this.employeeService.getEmployees()
      .subscribe(
        (response) => this.employees = response 
      );
  }

}
