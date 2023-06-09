import { Hero, PowerStat } from '../interfaces/hero.interface';
import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private readonly httpClient = inject(HttpClient);
  private readonly ENDPOINT = 'http://localhost:9001/heroes/';

  /* TODO 601: Adaptar el servicio a hacer uso de httpClient */
  add(hero: Hero){

  }
  updatePowerstat(hero: Hero, powerstat: PowerStat, value: number){
    hero.powerstats[powerstat] += value;

  }
  update(hero: Hero) {

  }
  findAll(): Observable<Hero[]> {

  }
  findOne(id: number): Observable<Hero>{

  }
  delete(hero: Hero): Observable<void>{

  }
}
