import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../Models/user';
import { SERVER_URL } from '../Helpers/constance';
import { Guid } from 'guid-typescript';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    register(username: string, password: string){
      const registerRequest = {
        userName: username,
        password: password,
        role: 0
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.post(SERVER_URL + `/user/register`, registerRequest, { headers, observe: 'response' });
    }




}
