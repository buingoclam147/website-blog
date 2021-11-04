import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import module ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

//import declarations
import { InputBasicComponent } from './components/input-basic/input-basic.component';
import { ButtonBasicComponent } from './components/button-basic/button-basic.component';

@NgModule({
  declarations:[InputBasicComponent, ButtonBasicComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzCardModule,
    NzIconModule,
    NzInputModule
  ],
  exports:[
    NzGridModule,
    NzCardModule,
    FormsModule,
    NzIconModule,
    NzInputModule,
    InputBasicComponent,
    ButtonBasicComponent
  ]
})
export class ShareModule { }
