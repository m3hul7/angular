import { Component, OnInit } from '@angular/core';
import { SiblingsService } from '../siblings.service';
import { User } from '../user.model';

@Component({
  selector: 'app-sibling-list',
  templateUrl: './sibling-list.component.html',
  styleUrls: ['./sibling-list.component.scss']
})
export class SiblingListComponent implements OnInit {

  public userlist:User[];
  constructor(private service:SiblingsService) {
    this.userlist<> = new User();    
    this.getSiblingData();
   }

  ngOnInit(): void {
    this.getSiblingData()
  }

  getSiblingData() {
    this.userlist = this.service.getUser();
  }

}
