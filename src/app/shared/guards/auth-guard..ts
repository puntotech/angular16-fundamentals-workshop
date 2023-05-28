import { Router } from "@angular/router";
import { UserStorageService } from '../services/user-storage.service';
import { inject } from "@angular/core";
import { map } from "rxjs";

export const authGuard = () => {
  const router = inject(Router);
  const service = inject(UserStorageService);

  return service.isLogin().pipe(map(value => value  ? value : router.navigate(['auth/login'])));
}
