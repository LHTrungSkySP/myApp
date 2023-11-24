import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRolePipe } from '../pipe/user-role.pipe';
import { BitecoinRolePipe } from '../pipe/bitcoin.pipe';



@NgModule({
  declarations: [
    UserRolePipe,
    BitecoinRolePipe,
  ],
  exports:[
    UserRolePipe,
    BitecoinRolePipe,
  ]
})
export class ShareModule { }
