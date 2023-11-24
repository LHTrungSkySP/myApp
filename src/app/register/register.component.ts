import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
      password: ['', Validators.required,this.passwordValidator()],
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

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;

      // Check for at least one uppercase letter
      const hasUppercase = /[A-Z]/.test(value);

      // Check for a special character
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      // Check length between 8 and 16
      const isValidLength = value.length >= 8 && value.length <= 16;

      // Combine all checks
      const isValid = hasUppercase && hasSpecialCharacter && isValidLength;

      return isValid ? null : { invalidPassword: true };
    };
  }
}
