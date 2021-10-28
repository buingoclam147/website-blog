import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './pages/blog.component';
import { ShareModule } from 'src/app/share/share.module';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ShareModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
