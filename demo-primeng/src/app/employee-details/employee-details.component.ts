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
    id: -1,
    name: '',
    email: ''
  };
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // receive by queryParams (should avoid for this case)
    this.route.queryParams.subscribe(
      params => {
        console.log('Got param: ', params['details']);
        if(params['details']){
          let data = JSON.parse(params['details']);
          if(data){
            this.employee = data;
          }
        }
      }
    )

    // receive by state (angular 7.2+)

    console.log('Got state: ', window.history.state.details);
    if(window.history.state.details) {
      this.employee = window.history.state.details;
      console.log('Got details: ', this.employee);
    }


  }

}
