import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgressUpdateService {

  public $progressbool = new Subject();
  apiLink:string = '';
  public array:any= [];

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
    this.$progressbool.subscribe(val => {
      console.log(val , " ", "from service");
    });
   }
   localSave(temp:any) {
    this.array.push(temp);
    console.log(this.array , "  from service")
   }
   fetchSave() {
     return this.array
   }


  saveUser(): Observable<any> {
    return this.http.post<any>(`${this.apiLink}/progressform/`, this.array)
  }
  
}
