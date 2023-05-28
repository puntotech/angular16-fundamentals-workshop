import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";

import { AuthLogin } from "../interfaces/auth-login.interface";
import { HttpClient } from '@angular/common/http';
import { UserStorageService } from "src/app/shared/services/user-storage.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_ENDPOINT = "http://localhost:9001/user";
  private readonly httpClient = inject(HttpClient);
  private readonly userStorageService = inject(UserStorageService);

  login(user: AuthLogin): Observable<any> {
    return this.httpClient.post(`${this.API_ENDPOINT}/login`, user).pipe(
      map((resp: any) => {
        this.userStorageService.token = resp.token;
        return resp;
      })
    );
  }

  register(user: AuthLogin): Observable<any> {
    return this.httpClient.post(`${this.API_ENDPOINT}/register`, user);
  }
}
