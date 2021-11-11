import { Component, OnInit } from '@angular/core';
enum ACTION {
  LOGIN,
  REGISTER
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  page = ACTION.LOGIN;
  constructor() { }

  ngOnInit(): void {
  }

}
