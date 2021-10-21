import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { NzCardModule } from 'ng-zorro-antd/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ShareModule,
    NzCardModule
  ]
})
export class CustomerModule { }
