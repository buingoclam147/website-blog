import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import module ng-zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
//import declarations
import { InputBasicComponent } from './components/input-basic/input-basic.component';
import { ButtonBasicComponent } from './components/button-basic/button-basic.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { InputPwComponent } from './components/input-pw/input-pw.component';


@NgModule({
  declarations: [InputBasicComponent, ButtonBasicComponent, FormControlErrorComponent, InputPwComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzCardModule,
    NzIconModule,
    NzInputModule,
    NzMessageModule,
    NzAlertModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule,
    NzDividerModule
  ],
  exports: [
    NzGridModule,
    NzCardModule,
    FormsModule,
    NzIconModule,
    NzInputModule,
    NzMessageModule,
    NzAlertModule,
    InputBasicComponent,
    ButtonBasicComponent,
    FormControlErrorComponent,
    InputPwComponent,
    ReactiveFormsModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule,
    NzDividerModule
  ]
})
export class ShareModule { }
