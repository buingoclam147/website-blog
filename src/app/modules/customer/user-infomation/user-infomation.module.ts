import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from 'src/app/share/share.module';
import { UserInfomationComponent } from './pages/user-infomation.component';
import { UserInfomationRoutingModule } from './user-infomation-routing.module';



@NgModule({
  declarations: [UserInfomationComponent],
  imports: [
    CommonModule,
    UserInfomationRoutingModule,
    ShareModule
  ]
})
export class UserInfomationModule { }