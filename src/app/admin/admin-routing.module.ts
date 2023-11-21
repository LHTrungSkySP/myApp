import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListAccountComponent } from './home/list-account/list-account.component';
import { RoleGuardService } from '../Helpers/role.guard';
import { ConfirmationService, MessageService } from 'primeng/api';

const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [RoleGuardService],
    data:{
      role: 1
    },
    children:[
      {
        path: 'list-account',
        component: ListAccountComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[ConfirmationService,MessageService]
})
export class AdminRoutingModule { }
