import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';;
import { Employee } from '../employee/employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsResolveGuardService implements Resolve<Employee> {

  constructor(private employeeService: EmployeeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employee | Observable<Employee> | Promise<Employee> {
    
    const id = Number(route.paramMap.get('id'));
    return this.employeeService.getEmployeeById(id);

  }
}
