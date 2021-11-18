import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpService, METHOD } from '../http/http.service';
import { ROUTER_CONST } from '../const/router.const';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser$ = new BehaviorSubject('');
  public readonly currentUser$ = this._currentUser$.asObservable();
  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {
    const exitedUserId = localStorage.getItem('userId');
    if (exitedUserId) {
      this._currentUser$.next(exitedUserId);
    }
  }
  login(data: any) {
    return this.httpService.sendToServer(METHOD.POST, 'auth', data).pipe(
      tap(x => {
        if (typeof (x._id) !== 'undefined') {
          localStorage.setItem('role', x.role);
          localStorage.setItem('userId', x._id);
          this._currentUser$.next(x._id);

        }
      })
    );
  }
  createAccount(data: any) {
    data = {
      userName: data.userName,
      password: data.password,
      role: "customer"
    }
    return this.httpService.sendToServer(METHOD.POST, 'user', data)
  }
  
  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    this.router.navigate([ROUTER_CONST['Đăng nhập']]);
    this._currentUser$.next('');
  }
}
