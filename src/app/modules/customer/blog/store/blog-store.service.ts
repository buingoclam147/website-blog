import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { API } from 'src/app/core/const/api.const';
import { PAGINATION_INIT } from 'src/app/core/const/sys.const';
import { HttpService, METHOD } from 'src/app/core/http/http.service';
import { Pagination } from 'src/app/share/models/table.model';

@Injectable({
  providedIn: 'root'
})
export class BlogStoreService {
  private _currentImage$ = new BehaviorSubject('');
  public readonly currentimage$ = this._currentImage$.asObservable().pipe(filter((x: string) => !!x));

  changeCurrentImage(url: string) {
    this._currentImage$.next(url);
  }

  constructor(private httpService: HttpService) { }
  getBlog(pagination: Pagination, filter: any): Observable<any> {
    const data = {
      ...pagination, ...filter
    };
    if (data) {
      return this.httpService.sendToServer(METHOD.GET, API.BLOG.GET_LIST, data);
    }
    else {
      return this.httpService.sendToServer(METHOD.GET, API.BLOG.GET_LIST, PAGINATION_INIT);
    }
  }
  getOneBlog(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.BLOG.GET_ONE(id));
  }
  postOneBlog(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.BLOG.POST_ONE, data);
  }
  updateBlog(id: any, data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.PATCH, API.BLOG.UPDATE(id), data);
  }
  deleteOneBlog(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.DELETE, API.BLOG.DELETE_ONE(id));
  }
  deleteBlog(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.BLOG.DELETE_MANY, data);
  }
}
