import { Guid } from "guid-typescript";

export interface User {
  userId: Guid;
  userName: string;
  password: string;
  role: number;
  createdDate: string;
}
export class RegisterUser {
  userName: string;
  password: string;
  constructor(userName: string='', passWord:string=''){
    this.userName=userName;
    this.password=passWord;
  }
}
