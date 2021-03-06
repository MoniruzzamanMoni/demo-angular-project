import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee-list', component: EmployeeComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { 
  
}
