import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

import { Hero } from '../interfaces/hero.interface';
import { HeroService } from '../services/hero.service';
import { inject } from '@angular/core';

/*
 TODO 505: Crea y exporta un ResolveFn<Hero> llamado heroResolver que reciba un ActivatedRouteSnapshot y retorne un Hero usando el método findOne del servicio HeroService.
 Debe usar route.paramMap.get('id') para obtener el id del héroe.
*/
