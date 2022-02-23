import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview'
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    ButtonModule,
		TabViewModule,
	],
	declarations: [
		AppComponent
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
