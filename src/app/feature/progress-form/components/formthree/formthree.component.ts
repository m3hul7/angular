import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressUpdateService } from '../../service/progress-update.service';

@Component({
  selector: 'app-formthree',
  templateUrl: './formthree.component.html',
  styleUrls: ['./formthree.component.scss']
})
export class FormthreeComponent implements OnInit {


  public form: FormGroup;
  public submitted = false;

  constructor(private _bool:ProgressUpdateService,private formBuilder: FormBuilder, private routers:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      // {
      //   validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
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
      this._bool.$progressbool.next(100);
      this.routers.navigate(['/progressform/complete']);
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  public update() {
    this._bool.$progressbool.next(100);
  }

  public back() {
    this._bool.$progressbool.next(33.33);
  }
}
