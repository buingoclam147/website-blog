import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryService } from 'src/app/core/services/category.service';
import { CreateBlogReq } from 'src/app/share/models/blog.model';
import { ListCategory } from 'src/app/share/models/category.model';
import { Pagination } from 'src/app/share/models/table.model';
import { BlogStoreService } from '../../blog/store/blog-store.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  loader = true;
  idBlog;
  idcategory$: Observable<ListCategory>;
  dataDetail: CreateBlogReq;
  constructor(
    private route: ActivatedRoute,
    private blogStore: BlogStoreService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idBlog = params.get('id');
      this.blogStore.getOneBlog(this.idBlog).subscribe(data => {
        this.dataDetail = { ...data, view: data.view + 1 };
        this.loader = false;
        this.blogStore.updateBlog(this.idBlog, this.dataDetail).subscribe(_ => {
        })
      });

    });
    this.idcategory$ = this.categoryService.getCategory(new Pagination(99, 0), '')
  }

}
