import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee = {
    name: '',
    email: ''
  };
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
         let data = JSON.parse(params['details']);
         console.log('Got param: ', data);
        this.employee = data;
      }
    )
  }

}
