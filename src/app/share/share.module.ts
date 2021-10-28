import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import module ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzCardModule,
    NzIconModule
  ],
  exports:[
    NzGridModule,
    NzCardModule,
    FormsModule,
    NzIconModule
  ]
})
export class ShareModule { }
