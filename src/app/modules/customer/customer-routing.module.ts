import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',     loadChildren: () => import('./home/home.module').then((i) => i.HomeModule) },
  { path: 'create-blog', loadChildren: () => import('./blog/blog.module').then((i) => i.BlogModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then((i) => i.LoginModule)},
  { path: 'list-blog', loadChildren: () => import('./list-blog/list-blog.module').then((i) => i.ListBlogModule)},
  { path: 'blog-detail/:id', loadChildren: () => import('./blog-detail/blog-detail.module').then((i) => i.BlogDetailModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
