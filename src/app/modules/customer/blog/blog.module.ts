import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './pages/blog.component';
import { ShareModule } from 'src/app/share/share.module';
import { BlogRoutingModule } from './blog-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ShareModule,
    CKEditorModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud')
  ],
  declarations: [BlogComponent ]
})
export class BlogModule { }
