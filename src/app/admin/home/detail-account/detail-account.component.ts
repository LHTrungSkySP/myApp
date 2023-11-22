import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/Models/user';
import { AdminService } from 'src/app/Services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRolePipe } from 'src/app/pipe/user-role.pipe';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {
  user: User = new User();
  userService: any;
  detailForm!: FormGroup;
  submitted: boolean = false;

  get f() { return this.detailForm.controls; }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private formBuilder: FormBuilder,
    private userRolePipe: UserRolePipe,
    private messageService: MessageService
  ) {
  }


  ngOnInit(): void {
    this.detailForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [''],
      role: [false],
    });

    let slug = this.route.snapshot.paramMap.get('userId');
    this.adminService.getUserById(slug).subscribe(
      (response) => {
        if (response.status == 200) {
          this.user = response.body as User;
        }
      },
      (error) => {
        console.log('Lỗi lấy dữ liệu: ', error);
      }
    );
  }
  comeback() {
    this.router.navigate(['admin']);
  }
  saveUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.detailForm.invalid) {
      return;
    }
    this.adminService.updateUser(
      this.user.userId as Guid,
      this.f['username'].value,
      this.f['password'].value,
      this.userRolePipe.transform(this.f['role'].value,'number')as number
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
    this.user.role= this.userRolePipe.transform(value,'boolean')as number ;
  }
}
