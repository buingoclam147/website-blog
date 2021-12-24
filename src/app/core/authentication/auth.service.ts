import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpService, METHOD } from '../http/http.service';
import { ROUTER_CONST } from '../const/router.const';
import { API } from '../const/api.const';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser$ = new BehaviorSubject('');
  public readonly currentUser$ = this._currentUser$.asObservable();
  private _avatarU$ = new BehaviorSubject(undefined);
  public readonly avatarU$ = this._avatarU$.asObservable();
  private _role$ = new BehaviorSubject(undefined);
  public readonly role$ = this._role$.asObservable();
  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {
    const exitedUserId = localStorage.getItem('userId');
    if (exitedUserId) {
      this._currentUser$.next(exitedUserId);
    }
    const role = localStorage.getItem('role');
    if (role) {
      this._role$.next(role);
    }
    const avatarValue = localStorage.getItem('avatar');
    if (avatarValue) {
      this._avatarU$.next(avatarValue);
    }
  }
  login(data: any) {
    return this.httpService.sendToServer(METHOD.POST, 'auth', data).pipe(
      tap(x => {
        if (typeof (x._id) !== 'undefined') {
          localStorage.setItem('role', x.role);
          localStorage.setItem('userId', x._id);
          localStorage.setItem('avatar', x.avatar);
          this._currentUser$.next(x._id);
          this._avatarU$.next(x.avatar);
          this._role$.next(x.role);
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
  updateImage(image) {
    localStorage.setItem('avatar', image);
    this._avatarU$.next(image);
    console.log(image);
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('avatar');
    this.router.navigate([ROUTER_CONST['Đăng nhập']]);
    this._currentUser$.next('');
    this._role$.next('');
  }
  getPersonalInfomation(id: string): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.INFOMATION(id));
  }
  updateUser(id: string, data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.PATCH, API.UPDATEUSER(id), data).pipe(tap(data => {
      this._avatarU$.next(data.avatar);
    }));
  }

}
