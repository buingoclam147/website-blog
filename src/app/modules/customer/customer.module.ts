import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { CustomerComponent } from './customer.component';
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ShareModule
  ]
})
export class CustomerModule { }
