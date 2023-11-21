import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Models/user';
import { LOGIN_URL } from '../Helpers/constance';
import { AuthenticateRequest } from '../Models/authenticate';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    getAllUser() {
        return this.http.get<User[]>(LOGIN_URL+`/user`);
    }

    register(user: AuthenticateRequest) {
        return this.http.post(LOGIN_URL+`/user/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}
