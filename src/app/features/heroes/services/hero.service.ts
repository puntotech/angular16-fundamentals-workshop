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

  add(hero: Hero){
    return this.httpClient.post<Hero>(this.ENDPOINT, hero);
  }
  updatePowerstat(hero: Hero, powerstat: PowerStat, value: number){
    const heroToUpdate = {
      ...hero,
      powerstats: {
        ...hero.powerstats,
        [powerstat]: hero.powerstats[powerstat] + value,
      }
    };
    return this.httpClient.patch(`${this.ENDPOINT}${hero.id}`, heroToUpdate);
  }
  update(hero: Hero) {
    return this.httpClient.put(`${this.ENDPOINT}${hero.id}`, hero);
  }
  findAll(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.ENDPOINT);
  }
  findOne(id: number): Observable<Hero>{
    return this.httpClient.get<Hero>(`${this.ENDPOINT}${id}`);
  }
  delete(hero: Hero): Observable<void>{
    return this.httpClient.delete<void>(`${this.ENDPOINT}${hero.id}`);
  }
}
