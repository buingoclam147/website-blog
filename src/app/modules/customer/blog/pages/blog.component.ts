import { Component, OnInit } from '@angular/core';
import * as customBuild from 'src/app/ckCustomBuild/build/ckeditor';
import { UploadAdapter } from './UploadAdapter';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public Editor = customBuild;
  data = "<p>Xin chào, hãy viết bài tại đây</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
  constructor() { }

  ngOnInit() {
  }
  public config = {
    toolbar: {

    },
    simpleUpload: {
      // The URL that the images are uploaded to.
      uploadUrl: 'https://pro1-d590d-default-rtdb.firebaseio.com/',
      withCredentials: true,

      // Headers sent along with the XMLHttpRequest to the upload server.
      headers: {
        'X-CSRF-TOKEN': 'CSRF-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }
    },

    language: 'vn'


  };

  public onReady(editor: any) {
    console.log(editor)
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement(console.log())

    );
    editor.plugins.get('FileRepository').createUploadAdapter = function (loader: any) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }



}
