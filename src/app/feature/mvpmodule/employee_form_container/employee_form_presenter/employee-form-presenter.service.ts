import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { EmployeeForm } from '../../employee.model';

@Injectable()
export class EmployeeFormPresenterService {

  private employeeFormData: Subject<EmployeeForm>;
  public employeeFormData$: Observable<EmployeeForm>;

  constructor(
    private fb : FormBuilder
  ) {
    this.employeeFormData = new Subject();
    this.employeeFormData$ = new Observable();
    this.employeeFormData$ = this.employeeFormData.asObservable();
   }

  //  Build Form Group
  buildform(){
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required ],
      department : ['', Validators.required],
      gender : ['', Validators.required],
      city : ['', Validators.required]
    })
  }


  // On Submit
  public submitData(employeeForm: FormGroup) {
    if (!employeeForm.valid) {
      return
    }
    this.employeeFormData.next(employeeForm.value);
  }
}
