import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { AuthLoginInfo } from './login-info';
// import { SignUpInfo } from './sigup-info';

// const AUTH_API = 'http://localhost:8090/api/auth/';

const AUTH_API='http://localhost:9090/jwt/api/auth/'
// const AUTH_API='http://ec2-3-83-107-109.compute-1.amazonaws.com/jwt/api/auth/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  login(username:string,password:string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username:string,email:string,password:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}
