import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductComponent } from './product/product.component';
import { EmployeeDetailsResolveGuardService } from './services/employee-details-resolve-guard.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },
  { path: 'employees/employee/:id', component: EmployeeDetailsComponent, resolve: {data: EmployeeDetailsResolveGuardService} },
  { path: 'products', component: ProductComponent },
  { path: '', component: HomeComponent },
  { path: '*', redirectTo: '' }
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
