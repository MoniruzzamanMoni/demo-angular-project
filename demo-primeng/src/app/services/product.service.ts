import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product.model';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  configMap: any = {};
  url: string = "";

  constructor(appConfigService : AppConfigService, private http: HttpClient) { 
    const data = appConfigService.getConfig();
    Object.keys(data).forEach(key => (this.configMap[key] = data[key]));
    this.url = this.configMap['product_url'];
    console.log("product_url: ", this.url);
  }

  getEmployees(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  

}
