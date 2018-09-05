import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuardService } from '../../shared/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin', canActivate: [AuthGuardService], component: AdminLayoutComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'one', component: PageOneComponent, 
      },
      {
        path: 'two', component: PageTwoComponent
      },
      {
        path: '**', component: PageOneComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
