import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  isRole: boolean = false;
  a = Math.floor(Math.random() * 8) + 1;
  loader: boolean = true;
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
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.auth.role$.subscribe(role => {
      if (role === undefined || role === "" || role === null || role === "Customer") {
        this.isRole = false;
      }
      if (role === "admin") {
        this.isRole = true;
      }
      else {
        console.log('err role')
      }
    })

    this.route.paramMap.subscribe(params => {
      this.idBlog = params.get('id');
      this.uploadData();
    });
    this.idcategory$ = this.categoryService.getCategory(new Pagination(99, 0), '')
  }
  routerBlogDetail(i) {
    this.router.navigate([ROUTER_CONST['Chi tiết bài viết'], i]);
  }

  updateStatus() {
    console.log(this.dataDetail);
    if (this.dataDetail.status === "Pending") {
      let dataUpdate = { ...this.blogStore, status: "Censored" }
      this.blogStore.updateBlog(this.dataDetail._id, dataUpdate).subscribe(_ => {
        this.uploadData();
        this.message.success('Đã kiểm duyệt bài viết thành công');
      })
    }
    else {
      let dataUpdate = { ...this.blogStore, status: "Pending" }
      this.blogStore.updateBlog(this.dataDetail._id, dataUpdate).subscribe(_ => {
        this.uploadData();
        this.message.success('Hủy trạng thái đã kiểm duyệt bài viết thành công');
      })
    }
  }
  deleteBlog() {
    this.blogStore.deleteOneBlog(this.dataDetail._id).subscribe(_ => {
      this.router.navigate([ROUTER_CONST['Kiểm duyệt']]);
      this.message.success('Xóa bài viết thành công');
    });
  }
  uploadData() {
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
        this.connectionBlog = [...connectionBlog.data];
      })
      this.loader = false;
    });
  }
}
