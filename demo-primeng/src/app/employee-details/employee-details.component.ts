import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data} from '@angular/router';
import { Employee } from '../employee/employee';
import { StateService } from '../services/state.service';

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
  
  constructor(private route:ActivatedRoute, private stateService: StateService) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (data: Data) => {
        this.employee = data['data'];
      }
    );


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

    // receive by custom StateService

    if(this.employee.id == -1) {
      this.employee = this.stateService.getData();
      console.log('Got state data by  state service: ', this.employee);
    }

    
  }

}
