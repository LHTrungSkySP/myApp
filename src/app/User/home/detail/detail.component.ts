import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { AuthenticateRespone } from 'src/app/Models/authenticate';
// import { User } from 'src/app/Models/user';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserService } from 'src/app/Services/user.service';
import { UserRolePipe } from 'src/app/Shares/pipe/user-role.pipe';
// import { UserRolePipe } from 'src/app/Shares/pipe/user-role.pipe';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  userInfor!:AuthenticateRespone;
  detailForm!: FormGroup;

  submitted: boolean = false;
  get f() { return this.detailForm.controls; }

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private userRolePipe: UserRolePipe,
    private userService: UserService,
    private router: Router,
    ){
  }
  ngOnInit(): void {

    this.detailForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',Validators.required],
      role: [false],
    });

    this.userInfor=this.authService.currentUserValue as AuthenticateRespone;
  }
  comeback(){
    this.router.navigate(['']);
  }

  saveUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.detailForm.invalid) {
      return;
    }
    this.userService.updateUser(
      this.userInfor.user_ID as Guid,
      this.userInfor.userName,
      // this.f['username'].value,
      this.f['password'].value,
      this.userRolePipe.transform(this.f['role'].value,'number') as number
    ).subscribe
      (
        (respone) => {
          this.comeback();

        },
        (error) => {
          console.log('Login error: ', error);
        },
      )
  }
  setRole(value:any){
    this.userInfor.role= this.userRolePipe.transform(value,'boolean')as number ;
  }
}
