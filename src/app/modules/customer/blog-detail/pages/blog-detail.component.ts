import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  idBlog;
  dataDetail$: Observable<CreateBlogReq>;
  idcategory$: Observable<ListCategory>;
  constructor(
    private route: ActivatedRoute,
    private blogStore: BlogStoreService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idBlog = params.get('id');
      this.dataDetail$ = this.blogStore.getOneBlog(this.idBlog);
    });
    this.idcategory$ = this.categoryService.getCategory(new Pagination(99, 0), '')
  }

}
