import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpService, METHOD } from '../http/http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser$ = new BehaviorSubject('');
  private _idMain$ = new BehaviorSubject('');
  public readonly currentUser$ = this._currentUser$.asObservable();
  public readonly idMain$ = this._idMain$.asObservable();
  constructor(
    private httpService: HttpService,
    private router: Router,
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
  // logout() {
  //   localStorage.removeItem('userId');
  //   this.router.navigate([ROUTER_CONST.LOGIN]);
  //   this._currentUser$.next('');
  // }
}
