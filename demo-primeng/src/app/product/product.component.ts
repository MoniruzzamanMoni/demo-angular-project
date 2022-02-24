import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from './product.model';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'product-item-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  columnDefs: ColDef[] = [
    { field: 'name' , sortable: true, filter: true},
    { field: 'unit', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];

  ngOnInit() {
      this.productService.getEmployees()
      .subscribe(
        (response) => this.products = response 
      );


  }

}
