import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoinComponent } from './home/list-coin/list-coin.component';
import { UserRoutingModule } from './user-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { PaginatorModule } from 'primeng/paginator';
import { BitecoinRolePipe } from '../Shares/pipe/bitcoin.pipe';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { DetailComponent } from './home/detail/detail.component';
import { UserRolePipe } from '../Shares/pipe/user-role.pipe';
import { ShareModule } from '../Shares/share/share.module';


@NgModule({
  declarations: [
    ListCoinComponent,

    // BitecoinRolePipe,

    NavbarComponent,
    HomeComponent,
    DetailComponent,
    // UserRolePipe,
  ],
  imports: [
    ShareModule,
    CommonModule,
    MenubarModule,
    UserRoutingModule,
    AvatarModule,
    PaginatorModule,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
