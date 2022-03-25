import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

   }
   public setToken(token:string) {
     localStorage.setItem('token', token)
   }
   public saveCredential(credential: login): Observable<any> {
     console.log(credential)
     return this.http.post<login>('http://localhost:3001/login',credential)
   }
}
