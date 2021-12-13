import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { CategoryService } from 'src/app/core/services/category.service';
import { ListCategory } from 'src/app/share/models/category.model';
import { Pagination, Table } from 'src/app/share/models/table.model';
import { BlogStoreService } from '../../blog/store/blog-store.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {
  loader = true;
  noData = false;
  isPersonal = true;
  inputSearch = '';
  valueSelect = '';
  listBlog;
  a = Math.floor(Math.random() * 8) + 1;
  listCategory$: Observable<ListCategory>;
  table: Table = new Table(new Pagination(6, 0), 0, [],
    {
      categoryId: '',
      Title: '',
    });
  constructor(
    private auth: AuthService,
    private router: Router,
    private blogStore: BlogStoreService,
    private categoryService: CategoryService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.listCategory$ = this.categoryService.getCategory(new Pagination(99, 0), '');
    this.filterBlog();

  }
  routerCreateBlog() {
    this.auth.currentUser$.subscribe(x => {
      if(x){
        this.router.navigate([ROUTER_CONST['Tạo mới bài viết']])
      }
      else{
        this.router.navigate([ROUTER_CONST['Đăng nhập']])
        this.message.info('Hãy đăng nhập để viết bài');
      }
    })
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
  personalFilter(i) {
    this.auth.currentUser$.subscribe(x => {
      if (x === '' || x === undefined || x === null) {
        this.message.info('Hãy đăng nhập để xem bài viết viết cá nhân');
        this.router.navigate([ROUTER_CONST['Đăng nhập']]);
      }
      else {
        this.isPersonal = !this.isPersonal;
        this.auth.currentUser$.subscribe(x => {
          if (i.target.outerText === "Của tôi") {
            this.table.filter.userId = x;
            this.filterBlog();
          }
          else {
            this.table.filter.userId = null;
            this.filterBlog();
          }
        })
      }
    })
  }
  pageSizeChange(value): void {
    this.table.pageSizeChange(value);
    this.filterBlog();
  }
  pageIndexChange(value): void {
    this.table.pageIndexChange(value);
    this.filterBlog();
  }
}
