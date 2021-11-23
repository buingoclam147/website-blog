import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { BlogDetailComponent } from './pages/blog-detail.component';
import { BlogDetailRoutingModule } from './blog-detail-routing.module';


@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    BlogDetailRoutingModule,
    ShareModule
  ]
})
export class BlogDetailModule { }