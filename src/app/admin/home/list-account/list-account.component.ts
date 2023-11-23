import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/Models/user';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListAccountComponent implements OnInit {
  listUser: User[]=new Array<User>();
  totalUser!: number;
  // listTypeStatus: TypeStatus[];
  // listTypeTask: TypeTask[];

  // selectedStatus!: TypeStatus;
  pageNumber!: number;
  pageSize: number = 10;
  pageCurrent: number = 0;
  totalTask!: number;
  listUserPaging!: User[];

  constructor(
    private adminService: AdminService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
    ) {
    this.getListUser();
  }

  getListUser(){
    this.adminService.getAllUser().subscribe(
      (respone) => {
        // console.log(respone);
        this.listUser = respone;
        this.paging();
      },
      (error) => {
        console.log('Action error: ', error);
      }
    );
  }
  ngOnInit(): void {
  }
  rePaging(event: any): void {
    this.pageCurrent = event.page;
    this.paging();
  }
  paging(): void {
    this.totalTask = this.listUser.length;
    this.pageNumber = Math.ceil(this.totalTask / this.pageSize);
    console.log(this.pageNumber+'  '+this.totalTask+'  '+this.pageSize+'  '+this.pageCurrent)
    this.listUserPaging = this.listUser.slice(this.pageCurrent * this.pageSize, (this.pageCurrent + 1) * this.pageSize);
    console.log(this.listUserPaging)


  }
  pageChange(event: any) {
    this.pageCurrent = event.first;
    this.pageSize = event.rows;
  }
  updateSuccess(value:string){
    this.getListUser();
    this.messageService.add({ severity: 'success', summary: 'Lưu thành công', detail: 'Lưu thành công tài khoản '+value+'.' });
  }
  createSuccess(event: string){
    this.getListUser();
    this.messageService.add({ severity: 'success', summary: 'Tạo thành công', detail: 'Tạo thành công tài khoản '+event+'.' });
  }
  deleteSeries(){
    this.listUser.forEach(element => {
      if(element.checked){
        this.deleteUser(element);
      }
    });
  }
  confirmOke(user: User) {
    this.confirmationService.confirm({
      message: 'Bạn muốn xóa tài khoản ' + user.userName + ' phải không?',
      header: 'Xác nhận xóa',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteUser(user);
      },
      reject: () => {
      }
    });
  }
  deleteUser(userDelete:User){
    this.adminService.deleteUser(userDelete.userId as Guid).subscribe(
      (response)=>{
        this.messageService.add({ severity: 'success', summary: 'Xóa thành công', detail: 'Xóa thành công tài khoản '+userDelete.userName+'.' });
        this.getListUser();
      }

    )
  }
}
