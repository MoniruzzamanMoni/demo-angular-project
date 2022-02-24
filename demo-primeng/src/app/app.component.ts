import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-primeng';

  
  items: MenuItem[] = [];

  ngOnInit() {
      // this.items = [{
      //     label: 'File',
      //     items: [
      //         {label: 'New', icon: 'pi pi-plus', url: 'http://www.primefaces.org/primeng'},
      //         {label: 'Open', icon: 'pi pi-download', routerLink: ['/pagename']},
      //         {label: 'Recent Files', icon: 'pi pi-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
      //     ]
      // }];

      
      this.items = [
            {label: 'Home', icon: 'pi pi-home', routerLink: ['/home']},
            {label: 'Employee List', icon: 'pi pi-list', routerLink: ['/employee-list']}
        ];
  }
  
}
