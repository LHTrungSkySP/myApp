import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router){

  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
