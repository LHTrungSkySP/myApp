import { Guid } from "guid-typescript";

export class User {
  userId!: Guid|string;
  userName!: string;
  password!: string;
  role!: number;
  createdDate!: string;
  checked!:boolean;
  constructor(){
    this.userId='';
    this.userName='';
    this.password='';
    this.role=0;
    this.createdDate='';
    this.checked=false;
  }
}
export class RegisterUser {
  userName: string;
  password: string;
  role:number;
  constructor(userName: string='', passWord:string='',role:number=0){
    this.userName=userName;
    this.password=passWord;
    this.role=role;
  }
}
