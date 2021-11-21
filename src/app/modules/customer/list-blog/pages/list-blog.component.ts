import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ROUTER_CONST } from 'src/app/core/const/router.const';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent implements OnInit {
  a = Math.floor(Math.random() * 6) + 1;
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  routerCreateBlog() {
    this.auth.currentUser$.subscribe(x => {
      x? this.router.navigate([ROUTER_CONST['Tạo mới bài viết']]): this.router.navigate([ROUTER_CONST['Đăng nhập']]);
    })
  }
}
