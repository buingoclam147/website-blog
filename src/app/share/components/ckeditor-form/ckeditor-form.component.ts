import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as customBuild from 'src/app/ckCustomBuild/build/ckeditor';
import { UploadAdapter } from 'src/app/modules/customer/blog/models/myUploadAdapter';
import { BlogStoreService } from 'src/app/modules/customer/blog/store/blog-store.service';
@Component({
  selector: 'app-ckeditor-form',
  templateUrl: './ckeditor-form.component.html',
  styleUrls: ['./ckeditor-form.component.scss']
})
export class CkeditorFormComponent implements OnInit {
  @Input() data: string = '';
  @Input() readonly: boolean = false;
  @Output('dataChange') change = new EventEmitter<string>();
  public Editor = customBuild;
  constructor(
    private blogStore: BlogStoreService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.blogStore.currentimage$.subscribe(urlImgae => {
      this.data = this.data.slice(0, this.data.indexOf("<img>")) + `<img src="${urlImgae}"/>` + this.data.slice(this.data.indexOf("<img>") + 5);
    })
  }
  @Input() config = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'fontBackgroundColor',
      'fontColor',
      'fontFamily',
      'fontSize',
      'highlight',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',
      '|',
      'outdent',
      'indent',
      '|',
      'subscript',
      'superscript',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'imageInsert',
      'link',
      '|',
      'undo',
      'redo'
    ],
    language: 'vn'

  }
  public onReady(editor: any) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement(console.log())
    );
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new UploadAdapter(loader, this.storage, this.blogStore);
    };

  }
  emitChangeValue(event) {
    this.change.emit(event);
  }
}
