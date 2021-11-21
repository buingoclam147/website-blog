import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBlogComponent } from './pages/list-blog.component';
import { ShareModule } from 'src/app/share/share.module';
import { ListBlogRoutingModule } from './list-blog-routing.module';


@NgModule({
  declarations: [ListBlogComponent],
  imports: [
    CommonModule,
    ListBlogRoutingModule,
    ShareModule
  ]
})
export class ListBlogModule { }