import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';
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
import { NzModalModule } from 'ng-zorro-antd/modal';

//import declarations
import { InputBasicComponent } from './components/input-basic/input-basic.component';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { InputPwComponent } from './components/input-pw/input-pw.component';
import { CkeditorFormComponent } from './components/ckeditor-form/ckeditor-form.component';


@NgModule({
  declarations: [InputBasicComponent, FormControlErrorComponent, InputPwComponent, CkeditorFormComponent],
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
    NzDividerModule,
    NzModalModule,
    CKEditorModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud')
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
    FormControlErrorComponent,
    InputPwComponent,
    ReactiveFormsModule,
    NzButtonModule,
    NzDropDownModule,
    NzSelectModule,
    NzDividerModule,
    NzModalModule,
    CkeditorFormComponent,
    CKEditorModule,
    HttpClientModule,
    AngularFireStorageModule,
  ]
})
export class ShareModule { }
