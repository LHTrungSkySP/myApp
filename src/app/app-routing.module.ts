import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './User/home/home.component';
// import { AuthGuard } from './Helpers/auth.guard';
import { Page403Component } from './Pages/page-403/page-403.component';
import { HomeComponent } from './User/home/home.component';
// import { DetailComponent } from './User/home/detail/detail.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '403',
    component: Page403Component
  },
  // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
