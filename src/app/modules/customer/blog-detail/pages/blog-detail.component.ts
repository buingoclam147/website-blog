import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ROUTER_CONST } from 'src/app/core/const/router.const';
import { CategoryService } from 'src/app/core/services/category.service';
import { CreateBlogReq } from 'src/app/share/models/blog.model';
import { ListCategory } from 'src/app/share/models/category.model';
import { Pagination, Table } from 'src/app/share/models/table.model';
import { BlogStoreService } from '../../blog/store/blog-store.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  a = Math.floor(Math.random() * 8) + 1;
  loader = true;
  idBlog;
  idcategory$: Observable<ListCategory>;
  dataDetail: CreateBlogReq;
  listUser;
  avatar = '/assets/avt.png';
  connectionBlog;
  table: Table = new Table(new Pagination(3, 0), 0, [],
    {
      categoryId: '',
      Title: '',
    });
  constructor(
    private route: ActivatedRoute,
    private blogStore: BlogStoreService,
    private categoryService: CategoryService,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idBlog = params.get('id');
      this.blogStore.getOneBlog(this.idBlog).subscribe(data => {
        this.dataDetail = { ...data, view: data.view + 1 };
        this.table.filter.categoryId = this.dataDetail.categoryId;
        this.blogStore.updateBlog(this.idBlog, this.dataDetail).subscribe(_ => {
        });
        this.auth.getPersonalInfomation(this.dataDetail.userId).subscribe(user => {
          if (user.avatar === undefined || user.avatar === '' || user.avatar === null) {
            this.avatar = '/assets/avt.png';
          }
          else {
            this.avatar = user.avatar;
          }
        });
        this.blogStore.getBlog(this.table.pagination, this.table.filter).subscribe(connectionBlog => {
          this.connectionBlog = [ ...connectionBlog.data] ;
          console.log(this.connectionBlog)
        })
        this.loader = false;
      });
    });
    this.idcategory$ = this.categoryService.getCategory(new Pagination(99, 0), '')
  }
  routerBlogDetail(i) {
    this.router.navigate([ROUTER_CONST['Chi tiết bài viết'], i]);
  }

}
