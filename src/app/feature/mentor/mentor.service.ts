import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mentor, MentorForm } from './mentor.model';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
 apiLink: string;

  constructor(
    private http: HttpClient
  ) { 
    this.apiLink = environment.baseURL;
  }

  public getMentor(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.apiLink}/mentor`)
  }
 
  public addMentor(form: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(`${this.apiLink}/mentor`,form) 
  }

  public getMentorById(id:string): Observable<Mentor> {
    return this.http.get<Mentor>(`${this.apiLink}/mentor/${id}`);
  }

  public editMentor(form: any, id: string) : any {
    return this.http.put<any>(`${this.apiLink}/mentor/${id}`,form)
  }

  public deleteMentor(id:number): any {
    return this.http.delete<any>(`${this.apiLink}/mentor/${id}`)
  }
}
