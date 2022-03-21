import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  public editData: User;
  public editmode:boolean;
  public savedIndex :number
  constructor(private service:SiblingsService) {
        this.userlist = [];
   }

  ngOnInit(): void {
    this.getSiblingData()
  }

  getSiblingData() {
    this.service.user$.subscribe(res=>{
      if(this.editData){
        this.userlist[this.savedIndex] = res;
        this.editmode = false;
      }
      else{
        this.userlist.push(res)
        console.log(this.userlist)
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.userlist, event.previousIndex, event.currentIndex);
  }

  deleteUser(index: number) {
     this.userlist.splice(index, 1)
    console.log(index);
    
  }

  editUser(index:number) {
    this.editData = this.userlist[index]
    this.service.edituser$.next(this.editData)
    this.editmode = true;
    this.savedIndex= index
  }
}
