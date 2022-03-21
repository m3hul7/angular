
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class SiblingsService {

  public user$ = new Subject<User>();
  public removeuser$ = new Subject<number>();
  public edituser$ = new Subject<User>();

  
  constructor() {
    // this.user$.subscribe((value) =>{ this.userlist.push(value);
    // console.log(value);
    // });
    // this.removeuser$.subscribe((value) => {
    //   this.userlist.splice(value, 1)
    // })
    // this.edituser$.subscribe((value) => {
    //   this.saveData = this.userlist[value]
    //   console.log(this.saveData)
    // })
   }

  // getUser():User[] {
  //   return this.userlist;
  // }

}