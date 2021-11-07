import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogStoreService {
  private _currentImage$ = new BehaviorSubject('');
  public readonly currentimage$ = this._currentImage$.asObservable().pipe(filter((x: string) => !!x));

  changeCurrentImage(url: string) {
    this._currentImage$.next(url);
  }

  constructor() { }
}
