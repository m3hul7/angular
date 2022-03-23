import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Mentor, MentorForm } from '../../mentor.model';


@Injectable()
export class MentorFormPresenterService {
 private mentorFormData: Subject<Mentor>
 public mentorFormData$: Observable<Mentor>
  constructor(
    private fb: FormBuilder
  ) { 
    this.mentorFormData = new Subject()
    this.mentorFormData$ = new Observable()

    this.mentorFormData$ = this.mentorFormData.asObservable()
  }
  buildForm() {
    return this.fb.group ({
      name:['', Validators.required],
      age:['', Validators.required],
      gender:['', Validators.required]
    })
  }
  onSubmit(mentorForm: FormGroup) {
    if (!mentorForm.valid) {
      return
    }
    this.mentorFormData.next(mentorForm.value);
  }
}
