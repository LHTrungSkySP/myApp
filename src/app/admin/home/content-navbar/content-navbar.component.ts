import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
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

  checkRole:boolean=false;

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

  resetAddUserForm(){
    this.addUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: [false, Validators.required],
    });
  }
  createUser() {
    this.submitted = true;
    if (this.addUserForm.invalid) {
      return;
    }
    this.loading = true;
    this.adminService.addUser(this.f["username"].value, this.f["password"].value,this.f["role"].value).subscribe
      (
        (respone) => {
          console.log('Success respone:  ', respone.status);
          this.createSuccess.emit(this.f["username"].value);
          this.resetAddUserForm();
          this.showCreateDialog = false;
        },
        (error) => {
          console.log('Login error: ', error);
        }
      )
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

}
