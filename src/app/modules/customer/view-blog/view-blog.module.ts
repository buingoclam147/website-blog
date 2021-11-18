import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from 'src/app/share/share.module';
import { ViewBlogComponent } from './pages/view-blog.component';
import { ViewBlogRoutingModule } from './view-blog-routing.module';


@NgModule({
  declarations: [ViewBlogComponent],
  imports: [
    CommonModule,
    ViewBlogRoutingModule,
    ShareModule
  ]
})
export class ViewBlogModule { }