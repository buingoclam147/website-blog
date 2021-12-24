import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { CensorshipRoutingModule } from './censorship-routing.module';
import { CensorshipComponent } from './pages/censorship.component';

@NgModule({
  imports: [
    CommonModule,
    CensorshipRoutingModule,
    ShareModule,
  ],
  declarations: [CensorshipComponent ]
})
export class CensorshipModule { }