import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../models/register-payload';
import { LoginPayload } from '../models/login-payload';
import { Auth } from '../models/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  baseUrl = 'http://localhost:8080/cookbook/api';
  loggedIn: boolean = false;

  constructor(private http: HttpClient) {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    this.loggedIn = !!storedLoggedIn && storedLoggedIn === 'true';
   }

  register(payload: RegisterPayload): Observable<Auth> {
    //this.loggedIn = false;
    return this.http.post<Auth>(`${this.baseUrl}/auth/register`, payload);
  }

  login(payload: LoginPayload): Observable<Auth> {
    //this.loggedIn = true;
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, payload);
  }

  setSessionObj(user: any) : void {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  getSessionObj() : any {
    return JSON.parse(JSON.stringify(sessionStorage.getItem("user")));
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  getUserName(): any {
    const jsonData = this.getSessionObj();
    const parsedData = JSON.parse(jsonData);
    return parsedData.username;
    //console.log(parsedData.id)
  }



}
