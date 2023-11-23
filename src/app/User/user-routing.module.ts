import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './home/detail/detail.component';
import { AuthGuard } from '../Helpers/auth.guard';
import { ListCoinComponent } from './home/list-coin/list-coin.component';
// import { ConfirmationService, MessageService } from 'primeng/api';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        component: ListCoinComponent,
        // canActivate: [AuthGuard]
      },
      {
        path: 'detail',
        component: DetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', redirectTo: '' }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
