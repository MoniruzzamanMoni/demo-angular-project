import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import { AppConfigService } from './services/app-config.service';
import { EmployeeService } from './services/employee.service';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProductComponent } from './product/product.component';
import { StateService } from './services/state.service';

const appConfigFactory = (appConfigService: AppConfigService) => {
  return () => appConfigService.loadAppConfig();
};
@NgModule({
	imports: [
		CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
		TabViewModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    PanelModule,
    AgGridModule,
    HttpClientModule
	],
	declarations: [
		AppComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    ProductComponent
	],
  providers: [
    EmployeeService,
    ProductService,
    StateService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      multi: true,
      deps: [AppConfigService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
