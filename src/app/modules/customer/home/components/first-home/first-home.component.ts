import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    private auth: AuthService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
  }
  onRouter(_) {
    this.auth.currentUser$.subscribe(id =>{
      console.log(id)
      if (id === undefined || id === '' || id === null) {
        this.router.navigate([ROUTER_CONST['Đăng nhập']]);
        this.message.info('Hãy đăng nhập để viết bài');
      }
      else {
        this.router.navigate([ROUTER_CONST['Tạo mới bài viết']]);
      }
    })
    
  }

}
