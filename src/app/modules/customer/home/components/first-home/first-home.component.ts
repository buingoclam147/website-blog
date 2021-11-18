import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ROUTER_CONST } from 'src/app/core/const/router.const';

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html',
  styleUrls: ['./first-home.component.scss']
})
export class FirstHomeComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  onRouter(_) {
    if (localStorage.getItem('userId') !== undefined || localStorage.getItem('userId') !== '' || localStorage.getItem('userId') !== null) {
      this.router.navigate([ROUTER_CONST['Tạo mới bài viết']]);
    }
    else {
      this.router.navigate([ROUTER_CONST['Đăng nhập']]);

    }
  }

}
