import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { Pagination } from 'src/app/share/models/table.model';
import { BlogStoreService } from '../store/blog-store.service';


@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
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
	data = "<p>Xin chào, hãy viết bài tại đây</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
	constructor(
		private categoryService: CategoryService,
		private auth: AuthService,
		private message: NzMessageService,
		private blogStore: BlogStoreService
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
				const dataBlog = {
					categoryId: currentIdCategory,
					userId: this.idUser,
					title: this.valueTitle,
					nikname: this.valueNikname,
					content: this.data,
					createAt: new Date().getTime(),
					status: 'Pending'
				}
				this.blogStore.postOneBlog(dataBlog).subscribe(x => {
					console.log(x);
					this.message.success('Bài viết đã được đăng thành công!', {
						nzDuration: 5000
					});
				})
			});
		}
		else {
			const reqCategory ={
				name: this.onCategory
			}
			this.categoryService.postOneCategory(reqCategory).subscribe(x => {
				console.log(x);
				this.isVisible = true;
			})
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
	}
}
