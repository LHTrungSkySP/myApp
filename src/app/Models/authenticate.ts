import { Guid } from "guid-typescript"

export interface AuthenticateRequest{
  userName: string,
  password: string
}
export interface AuthenticateRespone{
  user_ID: Guid,
  userName: string,
  role: number,
  createdDate: Date,
  token: string
}
