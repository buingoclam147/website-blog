import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from 'src/app/share/share.module';
import { LoginComponent } from './pages/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegiterComponent } from './components/regiter/regiter.component';


@NgModule({
  declarations: [LoginComponent, RegiterComponent, LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ]
})
export class LoginModule { }