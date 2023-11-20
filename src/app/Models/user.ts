import { Guid } from "guid-typescript";

export interface User {
  id: Guid;
  userName: string;
  role: string;
  createdDate: string;
}
