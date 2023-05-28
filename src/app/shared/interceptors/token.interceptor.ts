import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

import { UserStorageService } from '../services/user-storage.service'
import { inject } from "@angular/core";

export function tokenInterceptor(req: HttpRequest<unknown>,  next: HttpHandlerFn){
  const userStorageService = inject(UserStorageService);
  console.log("tokenInterceptor");

  if (userStorageService.token) {
    console.log("tokenInterceptor token:", userStorageService.token);
    const authReq = req.clone({
      headers: req.headers.set("X-AUTH-HEADER", userStorageService.token),
    });

    console.log("Making an authorized request");
    req = authReq;
  }
  return next(req);
  }
