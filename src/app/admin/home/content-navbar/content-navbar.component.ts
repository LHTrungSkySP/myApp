import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthenticateRequest } from 'src/app/Models/authenticate';
import { RegisterUser } from 'src/app/Models/user';

@Component({
  selector: 'app-content-navbar',
  templateUrl: './content-navbar.component.html',
  styleUrls: ['./content-navbar.component.scss'],
  providers: [MessageService]
})
export class ContentNavbarComponent implements OnInit {
  @Output() createSuccess = new EventEmitter<AuthenticateRequest>();
  @Output() deleteSuccess = new EventEmitter();

  // listTypeTask: TypeTask[];
  // listTypeStatus: TypeStatus[];
  newRegisterUser: RegisterUser = new RegisterUser();
  showCreateDialog = false;
  showDeleteDialog = false;

  loading = false;
  submitted = false;

  addUserForm!: FormGroup;

  get f() { return this.addUserForm.controls; }


  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    // private listTaskService: ListTaskService,
    // private listTaskTypeService: ListTypeTaskService,
    // private listTypeStatusTaskService: ListTypeStatusTaskService
  ) {
    // this.listTypeTask = this.listTaskTypeService.getData();
    // this.listTypeStatus = this.listTypeStatusTaskService.getData();
  }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordComfirm: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  createTask(): void {
    // this.listTaskService.addData(this.newTask);
    this.createSuccess.emit(this.newRegisterUser);
    this.newRegisterUser = new RegisterUser();
    this.showCreateDialog = false;
  }
  onSubmit(){}

  confirmOke() {
    // this.confirmationService.confirm({
    //   message: 'Bạn muốn xóa task những task đã chọn không?',
    //   header: 'Xác nhận xóa',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.deleteSuccess.emit();
    //   },
    //   reject: () => {
    //   }
    // });
  }
  deleteMess() {
    // this.messageService.add({ severity: 'success', summary: 'Xóa thành công', detail: 'Xóa thành công các task đã chọn.' });
  }
}
