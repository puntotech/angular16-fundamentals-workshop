import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  isLogin$ = new BehaviorSubject(false);
  #token = localStorage.getItem("user-token") || "";


  constructor(){
    if(this.token){
      this.isLogin$.next(true);
    }
  }

  set token(token: string) {
    this.#token = token;
    localStorage.setItem("user-token", token);
    this.isLogin$.next(true);
  }

  get token(): string {
    return this.#token;
  }

  isLogin() {
    return this.isLogin$;
  }
  logout(){
    this.token = "";
    this.isLogin$.next(false);
  }
}
