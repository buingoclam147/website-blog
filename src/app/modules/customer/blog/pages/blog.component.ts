import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as customBuild from 'src/app/ckCustomBuild/build/ckeditor';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/share/models/category.model';
import { Pagination } from 'src/app/share/models/table.model';
import { UploadAdapter } from '../models/myUploadAdapter';
import { BlogStoreService } from '../store/blog-store.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	valueNikname: string;
	valueTitle: string;
	onCategory;
	public Editor = customBuild;
	lCategory$;
	listOfItem = [];
	index = 0;

	listOfOption: Array<{ label: string; value: string }> = [];
	listOfTagOptions = [];
	data = "<p>Xin chào, hãy viết bài tại đây</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
	constructor(
		private blogStore: BlogStoreService,
		private storage: AngularFireStorage,
		private categoryService: CategoryService
	) {
	}

	ngOnInit() {
		this.blogStore.currentimage$.subscribe(urlImgae => {
			this.data = this.data.slice(0, this.data.indexOf("<img>")) + `<img src="${urlImgae}"/>` + this.data.slice(this.data.indexOf("<img>") + 5);
			console.log(this.data);
		})
		this.lCategory$ = this.categoryService.getCategory(new Pagination(99, 0), {}).pipe(map(data => {
			let dataNew = [];
			data.data.forEach(element => {
				dataNew.push(element.name);
			});
			this.listOfItem = dataNew;
			return dataNew;
		}));
	}
	addItem(input: HTMLInputElement): void {
		const value = input.value;
		if (this.listOfItem.indexOf(value) === -1) {
			this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
		}
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
	onCategoryChange(i): void {
		this.onCategory = i;
		console.log(i);
	}
	routerDemo($event) {

	}
}
