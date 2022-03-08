import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManipulationService } from '../service/data-manipulation.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { Department, UserDetails } from './../models/model'
import { DeletePopupComponent } from 'src/app/shared/delete-popup/delete-popup.component';
import { FormModalComponent } from '../form-modal/form-modal.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList!: UserDetails[];
  searchText:string = ''
  departmentArray: Department[] = []
  checkarray:UserDetails[] = []
  boolstore?:boolean
  editData!: UserDetails;
  constructor(private myService: DataManipulationService, private router: Router,  private overlay: Overlay) {
    this.getDeparment()
   }

  ngOnInit(): void {
    this.getDaata();
  }
  
  // displayOverlay() {
  //   console.log("hi");
  //   // const target = document.querySelector("#btnn") as HTMLElement;
  //   const overlayRef = this.overlay.create({
  //     positionStrategy : this.overlay.position()
  //     // .flexibleConnectedTo(target)
  //     // .withPositions([
  //     //   {
  //     //     originX: "start",
  //     //     originY: "bottom",
  //     //     overlayX: "start",
  //     //     overlayY: "top"
  //     //   }
  //     // ])
  //     .global()
  //   .right()
  //   .centerVertically()
  //   });
  //   const userProfilePortal = new ComponentPortal(UserFormComponent);
  //   overlayRef.attach(userProfilePortal);
  // }
  openFormModel(id?: number) {
    //config of overlay
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(FormModalComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.department = this.departmentArray;

    if (id) {
      console.log(this.editData);
      componentRef.instance.id = id;
      componentRef.instance.userData.subscribe((result) => {
        overlayRef.detach();
        this.updateUser(id, result);
      });
    } else {
      componentRef.instance.userData.subscribe((result) => {
        overlayRef.detach();
        this.saveData(result);
      });
    }
    componentRef.instance.cancel.subscribe(() => overlayRef.detach());
  }

  deletePopUp(id: number) {
    let config = new OverlayConfig();

    config.hasBackdrop = true;
    config.maxWidth = '400px';
    config.positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(DeletePopupComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance.value.subscribe((result) => {
      if (result) {
        this.deleteUser(id);
        overlayRef.detach();
      } else {
        overlayRef.detach();
      }
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }
  // checkEmptyArray() {
  //   this.checkarray= this.pipe.transform(this.userList, this.searchText)
  //   if(this.checkarray.length == 0){
  //      this.boolstore = true
  //   }
  //   else
  //   this.boolstore = false
  // }
  getDeparment() {
    this.myService.getDepartment().subscribe({
      next: (data) => {
        this.departmentArray = data
      }
    })
  }

  getDaata() {
 
    this.myService.getData().subscribe( {
      next: (data:UserDetails[]) => {
      // console.log(data);
      this.userList = data
    },
    error: (error)=>{
      alert("Somethings Went Wrong");
    }}); 
  }

  deleteUser(id:number) {
    this.myService.deleteUser(id).subscribe ( {
      next: (deleteid:UserDetails) => {
        console.log("deleted")
        this.getDaata()
      }
    });
  }

  navigateToEdit(id:number){
    this.router.navigate([`../edit/${id}`])
  }

  // editUser(id:number) { 
  //   this.myService.getId(id).subscribe ({
  //     next: (id) =>  {
  //       console.log(id)
  //       this.detailform.patchValue(id);
  //     }
  //   });
  // }
  // patchValue(id:number) {

  // }
  saveData(data: UserDetails): void {
    this.myService.createUser(data).subscribe(
      (result) => {
        alert('Data Saved Successfully');
        this.getDaata();
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }

  updateUser(id: number, data: UserDetails): void {
    this.myService.updateUser(id, data).subscribe(
      (result) => {
        alert('Data Updated Successfully');
        this.getDaata();
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
  }
}
