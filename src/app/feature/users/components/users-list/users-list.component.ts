import { Overlay } from '@angular/cdk/overlay';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { clients, users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';
import { UsersFormComponent } from '../users-form/users-form.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  users: users[] = []
  length?: number
  clients: clients[] = []
  showForm: boolean = false
  selectedOption:string = ''
  

  constructor(private userService: UsersService, private overlay: Overlay) {
    this.userService.change.subscribe((value) => { this.showForm = value, this.getUsersData() }) 
  }

  ngOnInit(): void {
    this.getUsersData()
    this.getClientsOptions()
  }
  du() {
    console.log("hi");
    const target = document.querySelector("#btnn") as HTMLElement;
    const overlayRef = this.overlay.create({
      positionStrategy : this.overlay.position()
      .flexibleConnectedTo(target)
      .withPositions([
        {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top"
        }
      ])
    });
    const userProfilePortal = new ComponentPortal(UsersFormComponent);
    overlayRef.attach(userProfilePortal);
  }

  onDrop(event: CdkDragDrop<users[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
    this.users.forEach((user, idx) => {
      user.id = idx + 1;
    });
  }

  selectChangeHandler (event: any) {
    this.selectedOption = event.target.value;
  }

  getUsersData() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data
        this.length = data.length
      }
    )
  }
  getClientsOptions() {
    this.userService.getClients().subscribe(
      (options) => {
        this.clients = options
      }
    )
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe ( 
      () => {
        console.log("deleted")
      }
    );
    this.getUsersData()
  }

  edit(id:number) {
    this.showForm = true
    setTimeout(()=> {
      this.userService.setID(id);},1000)
    // this.userService.setID(id);
  }

  onClickNewUser(){
    this.showForm = true
  }

}
