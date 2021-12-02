import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((i) => i.HomeModule) },
  { path: 'create-blog', loadChildren: () => import('./blog/blog.module').then((i) => i.BlogModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then((i) => i.LoginModule) },
  { path: 'list-blog', loadChildren: () => import('./list-blog/list-blog.module').then((i) => i.ListBlogModule) },
  { path: 'user-infomation', loadChildren: () => import('./user-infomation/user-infomation.module').then((i) => i.UserInfomationModule) },
  { path: 'blog-detail/:id', loadChildren: () => import('./blog-detail/blog-detail.module').then((i) => i.BlogDetailModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then((i) => i.ContactModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then((i) => i.AboutUsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
