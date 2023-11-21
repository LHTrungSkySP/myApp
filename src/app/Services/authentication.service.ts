import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthenticateRespone } from '../Models/authenticate';

import { LOGIN_URL } from '../Helpers/constance';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<AuthenticateRespone | null>;
    public currentUser: Observable<AuthenticateRespone | null>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<AuthenticateRespone | null>(JSON.parse(localStorage.getItem('currentUser') as string));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): AuthenticateRespone | null{
        return this.currentUserSubject.value;
    }

    login(username: string, password: string):Observable<HttpResponse<any>> {
      const authenticateRequest = {
        userName: username,
        password: password
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
        return this.http.post(LOGIN_URL+`/user/authenticate`,authenticateRequest,{headers,observe: 'response'});
    }
    updateToken(userToken: AuthenticateRespone){
      this.currentUserSubject.next(userToken);
    }
    register(username: string, password: string):Observable<HttpResponse<any>> {
      const registerRequest = {
        userName: username,
        password: password,
        role: 0
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
        return this.http.post(LOGIN_URL+`/user/register`,registerRequest,{headers,observe: 'response'});
    }

    logout() {
        // remove user from local storage to log user ou
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


}
