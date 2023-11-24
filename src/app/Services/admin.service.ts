import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { User } from '../Models/user';
import { SERVER_URL } from '../Helpers/constance';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { UserRolePipe } from '../Shares/pipe/user-role.pipe';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,private userRolePipe:UserRolePipe) { }

  getUserById(id: Guid| unknown) {
    return this.http.get<User>(SERVER_URL + `/user/${id}`,{ observe: 'response' });
  }
  addUser(username: string, password: string, role: boolean) {
    const addUserRequest = {
      userName: username,
      password: password,
      role: this.userRolePipe.transform(role,'number'),
    }
    console.log(addUserRequest);
    return this.http.post(SERVER_URL + `/user/register`, addUserRequest, { observe: 'response' });
  }

  getAllUser() {
    return this.http.get<User[]>(SERVER_URL + `/user`,);
  }

  deleteUser(id: Guid) {
    return this.http.delete(SERVER_URL+`/user/${id}`, { observe: 'response' });
  }

  updateUser(userid: Guid, username: string, password: string, role: number) {
    const updateUserRequest = {
      userName: username,
      password: password,
      role: role,
    }
    return this.http.put(SERVER_URL + `/User/` + userid, updateUserRequest, { observe: 'response' })
  }

}
