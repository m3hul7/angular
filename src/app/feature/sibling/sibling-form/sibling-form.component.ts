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
    this.service.addUser(this.detailForm.value);
    console.log("onsubmit crashed", this.detailForm.value)
  }
  resetForm() {
    this.detailForm.reset()
  }

}
