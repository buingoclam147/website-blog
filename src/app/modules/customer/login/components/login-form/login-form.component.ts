import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { API } from 'src/app/core/const/api.const';
import { ROUTER_CONST } from 'src/app/core/const/router.const';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  currentUser;
  formEverything: FormGroup;
  errorMessage = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formEverything = this.fb.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(6),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
    });
  }
  login(): void {
    this.auth.login(this.formEverything.value).subscribe(x => {
      if (x.login) {
        this.errorMessage = true;
      }
      else {
        this.router.navigate([ROUTER_CONST['Trang chủ']]);
      }
    }, _ => {
      this.errorMessage = true
    });
  }
}
