import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { ROUTER_CONST } from '../const/router.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userId = '';
  avt = undefined;
  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(id => {
      this.userId = id;
    });
    this.auth.avatarU$.subscribe(avt => {
      this.avt = avt;
    })
  }
  onRouter(i): void {
    if (i === 'Trang chủ') {
      this.router.navigate([ROUTER_CONST['Trang chủ']]);
    }
    else {
      this.router.navigate([ROUTER_CONST[i.target.outerText]]);
    }
  }
  logout() {
    this.auth.logout();
  }
}
