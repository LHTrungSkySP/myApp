import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ListAccountComponent } from './home/list-account/list-account.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContentNavbarComponent } from './home/content-navbar/content-navbar.component';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailAccountComponent } from './home/detail-account/detail-account.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { UserRolePipe } from '../pipe/user-role.pipe';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    HomeComponent,
    ContentNavbarComponent,
    ListAccountComponent,
    NavbarComponent,
    DetailAccountComponent,
    SideBarComponent,
    UserRolePipe,
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
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService,MessageService],
})
export class AdminModule { }
