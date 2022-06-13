import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressUpdateService } from '../../service/progress-update.service';

@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.scss']
})
export class FormtwoComponent implements OnInit {



  public form: FormGroup;
  public submitted = false;
  public temparray:any = [];
  constructor(private _bool:ProgressUpdateService,private formBuilder: FormBuilder, private routers:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
      
        email: ['', [Validators.required, Validators.email]],
        
      },
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
    this._bool.$progressbool.subscribe((val) => {
      console.log(val);
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
      this._bool.$progressbool.next(66.66);
      console.log(this.form.value);
      
      this._bool.localSave(this.form.value)
      this.routers.navigate(['/progressform/formthree']);
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public update() {
    this._bool.$progressbool.next(66.66);
    this.routers.navigate(['/progressform/formthree']);
  }

  public back() {
    this._bool.$progressbool.next(0);
  }
}
