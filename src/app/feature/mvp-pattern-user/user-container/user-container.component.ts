import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {


  public userList$: Observable<User[]>

  constructor(
    private userService: UserService
  ) { 
    this.userList$ =  this.userService.getUsers()
   }

  ngOnInit(): void {
    this.userList$ = this.userService.getUsers();
  }

}