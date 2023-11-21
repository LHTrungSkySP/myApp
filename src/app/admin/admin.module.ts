import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ListAccountComponent } from './home/list-account/list-account.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContentNavbarComponent } from './home/content-navbar/content-navbar.component';


import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ContentNavbarComponent,
    ListAccountComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MenubarModule,
    AvatarModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    DialogModule,
    ToastModule,
    TableModule,
    PasswordModule,
    PaginatorModule,
    ReactiveFormsModule,
    FormsModule,


  ]
})
export class AdminModule { }
