import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  role:number=0
  constructor(private authService:AuthenticationService){}

  ngOnInit(): void {
      if(this.authService.currentUserValue?.role){
        this.role=this.authService.currentUserValue.role;
      }
      console.log(this.role,this.authService.currentUserValue?.role)
  }
}
