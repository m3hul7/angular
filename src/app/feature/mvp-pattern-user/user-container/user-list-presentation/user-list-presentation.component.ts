import { Component, Input, OnInit } from '@angular/core';
import { users } from 'src/app/feature/users/models/users.model';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss']
})
export class UserListPresentationComponent implements OnInit {

  @Input() 
  public set userList(value: User[] | null) {
    if(value) {
      this._userList = value;
      this.tempUserList = value;
    }
  }
  public get userList(): User[] | null {
    return this._userList;
  }

  public tempUserList!: User[];
  private _userList: User[];


  constructor() { 
    this._userList = [];
  }

  ngOnInit(): void {
  }

  public onAdd() {
    // this.openUserForm();
  }

}
