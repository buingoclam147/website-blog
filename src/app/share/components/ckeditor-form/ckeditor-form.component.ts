import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { filter } from 'rxjs/operators';
import * as customBuild from 'src/app/ckCustomBuild/build/ckeditor';
import { CONFIG_CK_FORM } from 'src/app/core/const/sys.const';
import { UploadAdapter } from 'src/app/share/models/myUploadAdapter';
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
  }
  @Input() config = CONFIG_CK_FORM;
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
