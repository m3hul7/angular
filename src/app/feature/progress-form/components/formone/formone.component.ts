import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressUpdateService } from '../../service/progress-update.service';


@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.scss']
})
export class FormoneComponent implements OnInit {
  
  public form: FormGroup;
  public submitted = false;
  temparray: any= [];


  constructor(private _bool : ProgressUpdateService, private formBuilder: FormBuilder, private routers:Router) {
    
   }

   ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ]
      },
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
    this._bool.$progressbool.subscribe((val) => {
      console.log(val);
      
        let obj = this._bool.fetchSave()
        console.log(obj )
        // this.form.setValue(obj[0])
      
      
    })
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else {
      this._bool.$progressbool.next(33.33);
      console.log(this.form.value);
      
      this._bool.localSave(this.form.value)
      this.routers.navigate(['/progressform/formtwo']);
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public update() {
    this._bool.$progressbool.next(33.33);
    this.routers.navigate(['/progressform/formtwo']);
  }
}
