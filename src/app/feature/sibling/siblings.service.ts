
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class SiblingsService {

  public apiLink:String;
  public user = new Subject<User>();
  private userlist:User[] = [];
  
  constructor() {
    this.apiLink = environment.baseURL;
   }

  addUser(value: User) {
    this.userlist.push(
      value
    )
    console.log("inside service over",this.userlist)
  }
  getUser():User[] {
    return this.userlist;
  }
  
}
