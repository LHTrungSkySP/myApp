import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthenticateRespone } from '../Models/authenticate';

import { SERVER_URL } from '../Helpers/constance';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<AuthenticateRespone | null>;
  public currentUser: Observable<AuthenticateRespone | null>;

  constructor(private http: HttpClient,private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthenticateRespone | null>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AuthenticateRespone | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<HttpResponse<any>> {
    const authenticateRequest = {
      userName: username,
      password: password
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(SERVER_URL + `/user/authenticate`, authenticateRequest, { headers, observe: 'response' });
  }
  updateToken(userToken: AuthenticateRespone) {
    this.currentUserSubject.next(userToken);
  }

  logout() {
    // remove user from local storage to log user ou
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }


}
