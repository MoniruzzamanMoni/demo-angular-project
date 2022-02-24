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
import { AppConfigService } from './services/app-config.service';
import { EmployeeService } from './services/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';

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
    HttpClientModule
	],
	declarations: [
		AppComponent,
    HomeComponent,
    EmployeeComponent
	],
  providers: [
    EmployeeService,
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
