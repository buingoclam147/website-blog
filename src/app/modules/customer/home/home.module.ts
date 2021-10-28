import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { FirstHomeComponent } from './pages/first-home/first-home.component';
import { SecondHomeComponent } from './pages/second-home/second-home.component';
import { ShareModule } from 'src/app/share/share.module';
import { ButtonStartComponent } from './pages/button-start/button-start.component';


@NgModule({
  declarations: [HomeComponent, FirstHomeComponent, SecondHomeComponent, ButtonStartComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
