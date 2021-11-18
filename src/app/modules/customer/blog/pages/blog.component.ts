import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import * as customBuild from 'src/app/ckCustomBuild/build/ckeditor';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { Pagination } from 'src/app/share/models/table.model';
import { UploadAdapter } from '../models/myUploadAdapter';
import { BlogStoreService } from '../store/blog-store.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	formatData = '';
	isVisible = false;
	state = 1;
	valueNikname = '';
	valueTitle = '';
	onCategory;
	errorMessage;
	public Editor = customBuild;
	lCategory$;
	listOfItem = [];
	index = 0;
	originalDataCategory;
	idUser;

	listOfOption: Array<{ label: string; value: string }> = [];
	listOfTagOptions = [];
	data = "<p>Xin chào, hãy viết bài tại đây</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
	constructor(
		private blogStore: BlogStoreService,
		private storage: AngularFireStorage,
		private categoryService: CategoryService,
		private auth: AuthService,
		private message: NzMessageService
	) {
	}

	ngOnInit() {
		this.blogStore.currentimage$.subscribe(urlImgae => {
			this.data = this.data.slice(0, this.data.indexOf("<img>")) + `<img src="${urlImgae}"/>` + this.data.slice(this.data.indexOf("<img>") + 5);
		})
		this.lCategory$ = this.categoryService.getCategory(new Pagination(99, 0), {}).pipe(map(data => {
			let dataNew = [];
			data.data.forEach(element => {
				dataNew.push(element.name);
			});
			this.listOfItem = dataNew;
			this.originalDataCategory = dataNew;
			return data.data;
		}));
		this.auth.currentUser$.subscribe(id => {
			this.idUser = id;
		})

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
	}
	routerDemo(i) {
		this.formatData = this.data
		if (this.onCategory === undefined) {
			this.errorMessage = true;
		}
		else if (this.originalDataCategory.includes(this.onCategory)) {
			let currentIdCategory = '';
			// this.lCategory$.subscribe(data => {
			// 	data.forEach(i => {
			// 		i.name === this.onCategory ? currentIdCategory = i._id : i._id;
			// 	});
			// 	const dataBlog = {
			// 		categoryId: currentIdCategory,
			// 		userId: this.idUser,
			// 		title: this.valueTitle,
			// 		nikname: this.valueNikname,
			// 		content: this.formatData,
			// 		createAt: new Date().getTime(),
			// 		status: 'Pending'
			// 	}
			// 	this.blogStore.postOneBlog(dataBlog).subscribe(x => {
			// 		console.log(x);
			// 		this.message.success('Bài viết đã được đăng thành công!', {
			// 			nzDuration: 5000
			// 		});
			// 	})
			// });
			console.log(this.formatData)
		}
		else {
			console.log("khong thay");
			this.isVisible = true;
		}

	}

	handleOk(): void {
		this.isVisible = false;
	}

	handleCancel(): void {
		this.isVisible = false;
	}
	view(page: number): void {
		this.state = page;
		this.formatData = this.data;
		console.log(this.formatData);
	}
}
