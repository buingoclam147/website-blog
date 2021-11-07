import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as customBuild from 'src/app/ckCustomBuild/build/ckeditor';
import { UploadAdapter } from '../models/myUploadAdapter';
import { BlogStoreService } from '../store/blog-store.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	public Editor = customBuild;
	data = "<p>Xin chào, hãy viết bài tại đây</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
	constructor(
		private blogStore: BlogStoreService,
		private storage: AngularFireStorage,
	) {
	}

	ngOnInit() {
		this.blogStore.currentimage$.subscribe(urlImgae => {
			this.data = this.data.slice(0, this.data.indexOf("<img>")) + `<img src="${urlImgae}"/>` + this.data.slice(this.data.indexOf("<img>") + 5);
			console.log(this.data);
		})
	}
	public config = {
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
		console.log(editor)
		editor.ui.getEditableElement().parentElement.insertBefore(
			editor.ui.view.toolbar.element,
			editor.ui.getEditableElement(console.log())
		);
		editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
			return new UploadAdapter(loader, this.storage, this.blogStore);
		};

	}




}
