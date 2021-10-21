import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',     loadChildren: () => import('./modules/customer/customer.module').then((x) => x.CustomerModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then((x) => x.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
