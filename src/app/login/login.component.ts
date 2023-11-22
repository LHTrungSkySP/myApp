import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../Services/authentication.service';
import { AuthenticateRespone } from '../Models/authenticate';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      // private alertService: AlertService
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.loading = true;
      this.authenticationService.login(this.f["username"].value, this.f["password"].value).subscribe
      (
        (respone)=>{
          let userInforAuth = respone.body as AuthenticateRespone;
          localStorage.setItem('currentUser',JSON.stringify(userInforAuth));
          this.authenticationService.updateToken(userInforAuth);
          // console.log(userInforAuth.role);
          if(userInforAuth.role==0){
            this.router.navigate(['/']);
            return;
          }
          else if(userInforAuth.role==1){
          console.log('admin');
            this.router.navigate(['admin']);
            return;
          }
        },
        (error)=>{
          console.log('Login error: ',error);
        },
      )
  }
}
