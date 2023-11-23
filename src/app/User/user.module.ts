import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoinComponent } from './home/list-coin/list-coin.component';
import { UserRoutingModule } from './user-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { PaginatorModule } from 'primeng/paginator';
import { BitecoinRolePipe } from '../pipe/bitcoin.pipe';



@NgModule({
  declarations: [
    ListCoinComponent,
    BitecoinRolePipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AvatarModule,
    PaginatorModule,
  ]
})
export class UserModule { }
