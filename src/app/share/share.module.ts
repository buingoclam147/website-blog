import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import module ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzCardModule
  ],
  declarations: [],
  exports:[
    NzGridModule,
    NzCardModule,
    FormsModule
  ]
})
export class ShareModule { }
