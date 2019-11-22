import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder) { 
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  ngOnInit() {
  }

  login() {
    const val = this.form.value;
    if(val.email && val.password) {
      this.loginService.doLogin(val.email, val.password)
      .subscribe( () => {
        console.log("User is logged in");
        this.router.navigateByUrl('/');
    });
    }

  }

}
