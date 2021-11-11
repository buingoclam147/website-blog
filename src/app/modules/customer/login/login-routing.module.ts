import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegiterComponent } from './components/regiter/regiter.component';
import { LoginComponent } from './pages/login.component';

const routes: Routes = [{
  path: '', component: LoginComponent, children: [
    { path: '', component: LoginFormComponent },
    { path: 'register', component: RegiterComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
