import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './pages/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    ShareModule,
  ],
  declarations: [AboutUsComponent ]
})
export class AboutUsModule { }
