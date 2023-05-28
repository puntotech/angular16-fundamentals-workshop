import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

import { LoaderService } from "../services/loaderService";
import { finalize } from "rxjs";
import { inject } from "@angular/core";

export function loaderInterceptor(req: HttpRequest<unknown>,  next: HttpHandlerFn){
  const loaderService = inject(LoaderService);

  loaderService.show();
  return next(req).pipe(finalize(() => loaderService.hide()));
}
