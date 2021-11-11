import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',     loadChildren: () => import('./home/home.module').then((i) => i.HomeModule) },
  { path: 'create-blog', loadChildren: () => import('./blog/blog.module').then((i) => i.BlogModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then((i) => i.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
