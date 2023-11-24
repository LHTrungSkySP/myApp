import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { catchError, map, switchMap, throwError } from 'rxjs';
import { STATUS_CODE } from 'src/app/Helpers/constance';
// import { RegisterUser } from 'src/app/Models/user';
import { AdminService } from 'src/app/Services/admin.service';
// import { UserRolePipe } from 'src/app/pipe/user-role.pipe';


@Component({
  selector: 'app-content-navbar',
  templateUrl: './content-navbar.component.html',
  styleUrls: ['./content-navbar.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ContentNavbarComponent implements OnInit {
  @Output() createSuccess = new EventEmitter<string>();
  @Output() deleteSuccess = new EventEmitter();

  // listTypeTask: TypeTask[];
  // listTypeStatus: TypeStatus[];
  showCreateDialog = false;
  showDeleteDialog = false;

  loading = false;
  submitted = false;

  checkRole: boolean = false;

  addUserForm!: FormGroup;

  get f() { return this.addUserForm.controls; }


  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    // private listTaskService: ListTaskService,
    // private listTaskTypeService: ListTypeTaskService,
    // private listTypeStatusTaskService: ListTypeStatusTaskService
  ) {
    // this.listTypeTask = this.listTaskTypeService.getData();
    // this.listTypeStatus = this.listTypeStatusTaskService.getData();
  }

  ngOnInit(): void {
    this.resetAddUserForm();
  }

  resetAddUserForm() {
    this.addUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      role: [false, Validators.required],
    });
  }
  createUser() {
    this.submitted = true;
    if (this.addUserForm.invalid) {
      return;
    }
    this.loading = true;
    this.adminService.addUser(this.f["username"].value, this.f["password"].value, this.f["role"].value)
    .subscribe(
        (response) => {
          if(response.status==STATUS_CODE.CREATED){
            this.createSuccess.emit(this.f["username"].value);
            this.resetAddUserForm();
            this.showCreateDialog = false;
          } else if (response.status == STATUS_CODE.CONFLICT) {
            const usernameControl = this.addUserForm.get('username');
            usernameControl?.setErrors({ customError: true });
          }
        },
        (error) => {
          const usernameControl = this.addUserForm.get('username');
          usernameControl?.setErrors({ customError: true });
        },
    )
      // .pipe(
      //   map((response: HttpResponse<any>) => {
      //     if(response.status==STATUS_CODE.CREATED){
      //       this.createSuccess.emit(this.f["username"].value);
      //       this.resetAddUserForm();
      //       this.showCreateDialog = false;
      //     } else if (response.status == STATUS_CODE.CONFLICT) {
      //       const usernameControl = this.addUserForm.get('username');
      //       usernameControl?.setErrors({ customError: true });
      //     }
      //   }),
      //   catchError((error: any) => {
      //     // Handle any additional errors during the HTTP request
      //     console.error('HTTP error:', error);
      //     return throwError(error);
      //   })
      // )
  }

  confirmOke() {
    this.confirmationService.confirm({
      message: 'Bạn muốn xóa task những task đã chọn không?',
      header: 'Xác nhận xóa',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteSuccess.emit();
      },
      reject: () => {
      }
    });
  }
  deleteMess() {
    // this.messageService.add({ severity: 'success', summary: 'Xóa thành công', detail: 'Xóa thành công các task đã chọn.' });
  }

  conflictValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (value && value.toLowerCase() === 'conflict') {
        return { conflict: true };
      }

      return null;
    };
  }
}


// createUser() {
//   this.submitted = true;
//   if (this.addUserForm.invalid) {
//     return;
//   }
//   this.loading = true;
//   this.adminService.addUser(this.f["username"].value, this.f["password"].value,this.f["role"].value)
//     .pipe(
//       switchMap((response: HttpResponse<any>) => {}))}

//       (respone) => {
//         if(respone.status==STATUS_CODE.CREATED){
//           this.createSuccess.emit(this.f["username"].value);
//           this.resetAddUserForm();
//           this.showCreateDialog = false;
//         }
//       },
//       (error) => {
//         if(error.status==STATUS_CODE.CONFLICT){
//           let abc=this.addUserForm.get('username');
//           console.log('áddasd  ',abc);
//           this.addUserForm.get('username')?.setErrors({ usernameExists: true });
//         }
//         else console.log(error.message);
//       }
//     )
// }
