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
  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(id => {
      this.userId = id;
    });
  }
  onRouter(i): void {
    this.router.navigate([ROUTER_CONST[i.target.outerText]]);
  }
  logout() {
    this.auth.logout();
  }
}
