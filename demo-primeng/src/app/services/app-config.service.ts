import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) {
    const url = environment.config;
  }

  loadAppConfig() {
    const url = environment.config;
    return this.http
      .get(url, {withCredentials: true})
      .toPromise()
      .then(data => {
        this.appConfig = data;
      })
      .catch(err => {
          this.appConfig = {'error': err};
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
