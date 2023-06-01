import * as AuthAction from '../../features/auth/state/auth.actions';

import { Injectable, inject } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { selectToken } from "src/app/features/auth/state/auth.selectors";

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  isLogin$ = new BehaviorSubject(false);
  private readonly store = inject(Store);
  #token = "";


  constructor(){
    this.store.select(selectToken).subscribe((token: string) => {
      this.#token = token;
      const value = !!token;
      this.isLogin$.next(value);
    });
  }

  get token(): string {
    return this.#token;
  }

  isLogin() {
    return this.isLogin$;
  }
  logout(){
    this.store.dispatch(AuthAction.logout());
  }
}
