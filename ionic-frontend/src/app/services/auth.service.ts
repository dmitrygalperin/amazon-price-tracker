import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; //because we're working with observables
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  baseUrl: String;

  constructor(private http: Http) {
    //.baseUrl = 'http://localhost:3000';
    this.baseUrl = 'http://10.0.2.2:3000';
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/users/register', user, {headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/users/authenticate', user, {headers})
      .map(res => res.json());
  }

  getProfile(userId) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + '/users/profile', { userId: userId }, {headers})
      .map(res => res.json());
  }

  storeUserData(token, user) {
    if(token) localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
