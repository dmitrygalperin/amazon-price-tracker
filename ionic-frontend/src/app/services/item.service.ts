import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class ItemService {
  http: any;
  baseUrl: String;

  constructor(http: Http, private authService: AuthService) {
    this.http = http;
    //this.baseUrl = 'http://localhost:3000';
    this.baseUrl = 'http://10.0.2.2:3000';
  }

  isolateAsin(url) {
    const regex = RegExp("(\/[A-Z0-9]{10}\/)");
    var m = url.match(regex);
    if(m) return m[0].replace(/\//g, '')
    return false;
  }

  addToTracker(asin) {
    var user = JSON.parse(localStorage.getItem('user'));
    var data = {
      asin: asin,
      userId: user.id || user._id
     };
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/items/new', data, {headers})
      .map(res => res.json());

  }

  removeItem(asin) {
    var user = JSON.parse(localStorage.getItem('user'));
    var data = {
      asin: asin,
      userId: user.id || user._id
     };
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/items/remove', data, {headers})
      .map(res => res.json());
  }

  getItemByAsin(asin) {
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/items/get', {asin: asin}, {headers})
      .map(res => res.json());
  }
}
