import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AdminModule } from './admin/admin.module';
// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './Helpers/jwt.interceptor';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './User/home/home.component';
import { NavbarComponent } from './User/home/navbar/navbar.component';
import { Page403Component } from './Pages/page-403/page-403.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SideBarComponent } from './User/home/side-bar/side-bar.component';
import { UserModule } from './User/user.module';
import { UserRoutingModule } from './User/user-routing.module';

// import { AlertComponent } from './_components';
// import { HomeComponent } from './home';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        PasswordModule,
        CheckboxModule,
        InputTextModule,
        ButtonModule,
        MenubarModule,
        AvatarModule,
        AppRoutingModule,
        AdminModule,
        // AdminRoutingModule,
        UserModule,
        // UserRoutingModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        NavbarComponent,
        Page403Component,
        SideBarComponent,
        // AlertComponent,
        // HomeComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        MessageService,ConfirmationService
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
