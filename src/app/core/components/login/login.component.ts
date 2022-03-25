import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  public formData : FormGroup

  ngOnInit(): void {
    this.formData = this.fb.group( {
      email : ['',Validators.required],
      password : ['', Validators.required]
    }) 
  }
  public onSubmit(){
    this.loginService.saveCredential(this.formData.value).subscribe((res) => {
      this.loginService.setToken(res.token)
      this.router.navigateByUrl("mvp/mvp-list")
    })

  }

}
