import { Answer } from './home/model/Answers';
import { environment } from './../environments/environment';

import { Questions } from './home/model/questions';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = 'http://blog.ambrishjha.in/wp-json/wcra/v1/api/?secret_key=tz1Enppaq00xOYySu8YaDt578LT5oQgP';
// const apiUrl = environment.ambrishApi;
const postUrl = 'http://192.168.1.5/wordpressRestforTest/wp-json/wcra/v1/answerapi/?secret_key=xW5LTVtDRnwkEWxVn25I9t54lrABYIj0&param1=;';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 public token;
  constructor(private http: HttpClient) {

   }
   getData(): Observable<Questions[]> {
   // tslint:disable-next-line: no-string-literal
   return this.http.get(`${apiUrl}`).pipe(map (result => result['data']));
   }

   postData(data): Observable<any> {
    const header = new  HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Request-Method': 'POST',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${this.token}`
    });
    return this.http.post(`${postUrl}+${data}`, {
   headers: header
    });
  }
}
