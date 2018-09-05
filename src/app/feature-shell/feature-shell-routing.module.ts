import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { PageOneComponent } from './admin/page-one/page-one.component';
import { PageTwoComponent } from './admin/page-two/page-two.component';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserModule } from './user/user.module';


const routes: Routes = [
  {
    path: 'admin', component: AdminRoutingModule
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, AdminModule, UserModule]
})
export class FeatureShellRoutingModule { }
