import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit {
  listUser!: User[];
  totalUser!: number;
  // listTypeStatus: TypeStatus[];
  // listTypeTask: TypeTask[];

  // selectedStatus!: TypeStatus;
  pageNumber!: number;
  pageSize: number = 10;
  pageCurrent: number = 0;
  totalTask!: number;
  listUserPaging!: User[];

  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe(
      (respone) => {
        console.log(respone);
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
    this.listUserPaging = this.listUser.slice(this.pageCurrent * this.pageSize, (this.pageCurrent + 1) * this.pageSize);

  }
  pageChange(event: any) {
    this.pageCurrent = event.first;
    this.pageSize = event.rows;
  }
  createSuccess(event: any){

  }
  deleteSeries(){}

}
