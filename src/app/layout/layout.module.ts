import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from '../feature-shell/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [EmployeeLayoutComponent,
    AdminLayoutComponent,DashboardComponent],
})
export class LayoutModule { }
