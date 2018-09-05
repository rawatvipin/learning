import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReversePipe } from './reverse.pipe';
import { UpperCasePipe } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [PageOneComponent,
    PageTwoComponent,
    DashboardComponent,
    ReversePipe,
  ]
})
export class AdminModule { }
