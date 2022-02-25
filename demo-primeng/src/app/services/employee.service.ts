import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  configMap: any = {};
  url: string = "";

  constructor(appConfigService : AppConfigService, private http: HttpClient) { 
    const data = appConfigService.getConfig();
    Object.keys(data).forEach(key => (this.configMap[key] = data[key]));
    this.url = this.configMap['employee_url'];
    console.log("employee_url: ", this.url);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + id);
  }
  

}
