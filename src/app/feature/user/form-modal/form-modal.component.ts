import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Department, UserDetails } from '../models/model';
import { DataManipulationService } from '../service/data-manipulation.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  public modalTitle: string;
  private isAddMode: boolean;


  @Input() public id: number = 0;
  @Input() public editData: UserDetails;
  @Input() public department: Department[];

  @Output() public userData;
  @Output() public cancel;

  constructor(private fb: FormBuilder, private service: DataManipulationService) { 
    this.modalTitle = 'Add User';
    this.editData = {} as UserDetails;
    this.department = [];
    this.isAddMode = true;

    this.userData = new EventEmitter<UserDetails>();
    this.cancel = new EventEmitter<String>();
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.isAddMode = !this.id;
    console.log(this.registrationform);

    // this.getDepartmentList();
    // this.getbyid();

    if (this.id != 0) {
      this.isAddMode = false;
    }
    if (!this.isAddMode) {
      this.modalTitle = 'Edit User';
      this.registrationform.patchValue(this.editData);
    }
  }
  registrationform = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', Validators.required],
    gender: [''],
    date: [''],
    department: ['', Validators.required],
  });
  get getvalue() {
    return this.registrationform.controls;
  }
  onSubmit() {
    this.userData.emit(this.registrationform.value);
  }

  resetForm() {
    this.registrationform.reset();
  }

  onCancel() {
    this.cancel.emit();
  }
}
