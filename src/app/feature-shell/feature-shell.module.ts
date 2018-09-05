import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureShellRoutingModule } from './feature-shell-routing.module';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { EmployeeLayoutComponent } from '../layout/employee-layout/employee-layout.component';
import { AuthGuardService } from '../shared/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FeatureShellRoutingModule,
  ],
  declarations: [AdminLayoutComponent, EmployeeLayoutComponent],
  providers: [AuthGuardService],
  exports: [],

})
export class FeatureShellModule { }