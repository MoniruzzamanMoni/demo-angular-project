import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  data:any;
  constructor() { }

  setData(data:any) {
    this.data = data;
  }

  getData() {
    const data =  this.data;
    this.data = undefined;
    return data;
  }
}
