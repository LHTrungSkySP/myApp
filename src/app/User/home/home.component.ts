import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  role!:number;
  constructor(private authService:AuthenticationService){}

  ngOnInit(): void {

      if(this.authService.currentUserValue?.role!=null){
        this.role=this.authService.currentUserValue.role;
      }
      else{
        this.role=-1;
      }
  }
}
