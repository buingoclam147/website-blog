import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',     loadChildren: () => import('./modules/customer/customer.module').then((i) => i.CustomerModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then((i) => i.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
