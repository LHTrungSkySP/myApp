import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  passComfirm = true;
  submitted = false;
  returnUrl!: string;


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    // private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordComfirm: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if(!this.checkPasswords()){
      this.passComfirm=false;
    }
    if (this.registerForm.invalid || !this.passComfirm) {
      return;
    }
    this.loading = true;
    this.userService.register(this.f["username"].value, this.f["password"].value).subscribe
      (
        (respone) => {
          console.log('Success respone:  ', respone.status);
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          console.log('Login error: ', error);
        }
      )
  }
  checkPasswords() {
    if(this.f["password"].value != this.f["passwordComfirm"].value)
      return false;
    else return true;
  }
}
