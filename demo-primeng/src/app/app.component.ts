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
      this.items = [
            {label: 'Home', icon: 'pi pi-home', routerLink: ['/home']},
            {label: 'Employee List (PrimeNG)', icon: 'pi pi-list', routerLink: ['/employee-list']},
            {label: 'Product List (AgGrid)', icon: 'pi pi-list', routerLink: ['/product-list']},
        ];
  }
  
}
