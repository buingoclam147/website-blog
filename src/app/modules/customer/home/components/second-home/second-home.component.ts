import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_CONST } from 'src/app/core/const/router.const';

@Component({
  selector: 'app-second-home',
  templateUrl: './second-home.component.html',
  styleUrls: ['./second-home.component.scss']
})
export class SecondHomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  onRouter(_){
    this.router.navigate([ROUTER_CONST['Đăng ký']]);
  }
}
