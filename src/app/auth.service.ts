import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
const jwtApi = 'http://blog.ambrishjha.in/wp-json/jwt-auth/v1/token/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public isAuthenticate = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }


  postLogin(data) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post(`${jwtApi}`, data);
  }
}
