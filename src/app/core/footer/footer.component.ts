import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_CONST } from '../const/router.const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onRouter(i): void {
    if (i === 'Trang chủ') {
      this.router.navigate([ROUTER_CONST['Trang chủ']]);
    }
    else {
      this.router.navigate([ROUTER_CONST[i.target.outerText]]);
    }
  }
}
