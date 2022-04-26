import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phonemask',
  templateUrl: './phonemask.component.html',
  styleUrls: ['./phonemask.component.scss']
})
export class PhonemaskComponent  {

  form: FormGroup;
   constructor(fb:FormBuilder) {
    this.form=fb.group({
      phone:['']
    })
  }

}
