import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../shared/auth-guard.service';
import { EmployeeLayoutComponent } from '../../layout/employee-layout/employee-layout.component';
import { UserPageOneComponent } from './user-page-one/user-page-one.component';
import { UserPageTwoComponent } from './user-page-two/user-page-two.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "user", canActivate: [AuthGuardService], component: EmployeeLayoutComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: "one", component: UserPageOneComponent
      },
      {
        path: "two", component: UserPageTwoComponent
      },
      {
        path: "**", redirectTo: "one"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
