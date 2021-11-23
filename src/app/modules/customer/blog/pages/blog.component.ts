import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { CONFIG_CK_FORM } from 'src/app/core/const/sys.const';
import { CategoryService } from 'src/app/core/services/category.service';
import { Pagination } from 'src/app/share/models/table.model';
import { BlogStoreService } from '../store/blog-store.service';


@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	CONFIG_CK_FORM = CONFIG_CK_FORM
	dateNow = new Date().getTime();
	isVisible = false;
	state = 1;
	valueNikname = '';
	valueTitle = '';
	onCategory;
	errorMessage;
	lCategory$;
	listOfItem = [];
	index = 0;
	originalDataCategory;
	idUser;
	listOfOption: Array<{ label: string; value: string }> = [];
	listOfTagOptions = [];
	data = "<p>Xin chào, hãy viết bài tại đây</p>";
	constructor(
		private categoryService: CategoryService,
		private auth: AuthService,
		private message: NzMessageService,
		private blogStore: BlogStoreService,
		private router: Router,
	) {
	}

	ngOnInit() {
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
		this.blogStore.currentimage$.subscribe(urlImgae => {
			this.data = this.data.slice(0, this.data.indexOf("<img>")) + `<img src="${urlImgae}"/>` + this.data.slice(this.data.indexOf("<img>") + 5);
		})

	}
	addItem(input: HTMLInputElement): void {
		const value = input.value;
		if (this.listOfItem.indexOf(value) === -1) {
			this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
		}
	}
	onCategoryChange(i): void {
		this.onCategory = i;
	}
	routerDemo(i) {
		if (this.onCategory === undefined) {
			this.errorMessage = true;
		}
		else if (this.originalDataCategory.includes(this.onCategory)) {
			let currentIdCategory = '';
			this.lCategory$.subscribe(data => {
				data.forEach(i => {
					i.name === this.onCategory ? currentIdCategory = i._id : i._id;
				});
				this.createBlog(currentIdCategory);
			});
		}
		else {
			this.isVisible = true;
		}


	}

	createBlog(idCategory: string): void {
		const dataBlog = {
			categoryId: idCategory,
			userId: this.idUser,
			title: this.valueTitle,
			nikname: this.valueNikname,
			content: this.data,
			createAt: this.dateNow,
			like: 0,
			status: 'Pending'
		}
		this.blogStore.postOneBlog(dataBlog).subscribe(data => {
			console.log(data);
			this.message.success('Bài viết đã được đăng thành công!', {
				nzDuration: 5000
			});
			this.router.navigate([ROUTER_CONST['Chi tiết bài viết'], data._id]);
		})
	}
	handleOk(): void {
		this.isVisible = false;
		const reqCategory = {
			name: this.onCategory
		}
		this.categoryService.postOneCategory(reqCategory).subscribe(x => {
			this.createBlog(x._id);
		})
	}

	handleCancel(): void {
		this.isVisible = false;
	}
	view(page: number): void {
		this.state = page;
	}
}
