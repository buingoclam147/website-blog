import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { CategoryService } from 'src/app/core/services/category.service';
import { BlogStoreService } from 'src/app/modules/customer/blog/store/blog-store.service';
import { ListCategory } from 'src/app/share/models/category.model';
import { Pagination, Table } from 'src/app/share/models/table.model';

@Component({
  selector: 'app-censorship',
  templateUrl: './censorship.component.html',
  styleUrls: ['./censorship.component.scss']
})
export class CensorshipComponent implements OnInit {
  loader = true;
  noData = false;
  isPersonal = true;
  inputSearch = '';
  valueSelect = '';
  listBlog = [];
  a = Math.floor(Math.random() * 8) + 1;
  listCategory$: Observable<ListCategory>;
  table: Table = new Table(new Pagination(6, 0), 0, [],
    {
      categoryId: '',
      Title: '',
    });
  constructor(
    private router: Router,
    private blogStore: BlogStoreService,
    private categoryService: CategoryService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.listCategory$ = this.categoryService.getCategory(new Pagination(99, 0), '');
    this.filterBlog();

  }

  valueSelectChange(i): void {
    this.table.filter.categoryId = i;
    this.filterBlog();
  }
  filterBlog() {
    this.blogStore.getBlog(this.table.pagination, this.table.filter).subscribe(x => {
      this.table.total = x.total;
      this.listBlog = x.data;
      if (x.data.length === 0) {
        this.noData = true;
      }
      else {
        this.noData = false;
        this.table.isCheckedAll = false;
        this.table.data = x.data.map((i: any) => {
          i.checked = false;
          return i;
        });
      }
      this.loader = false;
    });
  }
  searchTitle() {
    this.table.filter.title = this.inputSearch;
    this.filterBlog();
  }
  routerBlogDetail(i) {
    this.router.navigate([ROUTER_CONST['Chi tiết bài viết'], i]);
  }

  pageSizeChange(value): void {
    this.table.pageSizeChange(value);
    this.filterBlog();
  }
  pageIndexChange(value): void {
    this.table.pageIndexChange(value);
    this.filterBlog();
  }
  deleteManyBlog(): void {
    const data = [];
    this.table.data.forEach(item => {
      return item.checked === true ? data.push(item._id) : data;
    });
    this.blogStore.deleteBlog(data).subscribe(_ => {
      this.filterBlog();
      this.message.success('Xóa bài viết thành công');
    });
  }
}
