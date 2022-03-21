import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiblingsService } from '../siblings.service';

@Component({
  selector: 'app-sibling-form',
  templateUrl: './sibling-form.component.html',
  styleUrls: ['./sibling-form.component.scss']
})
export class SiblingFormComponent implements OnInit {


  detailForm!:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private service: SiblingsService) {
    this.buildUserDetailsForm();
   }

  ngOnInit(): void {
    this.editData();
  }

  buildUserDetailsForm() {
    this.detailForm = this.formBuilder.group({
      id: [],
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]]
    })
  }
  get f(){
    return this.detailForm.controls;
  }

  onSubmit() {
    this.service.user$.next(this.detailForm.value);
    console.log(this.detailForm.value);
    this.resetForm();
  }
  resetForm() {
    this.detailForm.reset()
  }

  editData(){
    this.service.edituser$.subscribe(res =>{
      this.detailForm.patchValue(res);
      console.log(this.detailForm)
    })
  }


}
