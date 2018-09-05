import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageOneComponent } from './user-page-one/user-page-one.component';
import { UserPageTwoComponent } from './user-page-two/user-page-two.component';
import { AuthGuardService } from '../../shared/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserPageOneComponent, UserPageTwoComponent]
})
export class UserModule { }
