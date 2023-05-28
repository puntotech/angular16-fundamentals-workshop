import { Hero } from '../interfaces/hero.interface';
import { heroes } from '../heroes-db-lite';

export class HeroService {
  private heroes: Hero[] = heroes;

  public findAll(): Hero[] {
    return this.heroes;
  }

  public find(id: string | number): Hero {
    id = this.convertID(id);
    return this.heroes.find((hero) => hero.id === id) || {} as Hero;
  }

  public add(hero: Hero) {
    this.heroes = [hero, ...this.heroes];
    return hero;
  }

  public delete(id: string | number): void {
    id = this.convertID(id);
    this.heroes = this.heroes.filter((hero) => hero.id !== id);
  }

  public update(id: string | number, updatedHero: Hero | Partial<Hero>) {
    id = this.convertID(id);
    this.heroes = this.heroes.map((hero) =>
      hero.id === id ? { ...hero, ...updatedHero } : hero
    );
    return this.heroes;
  }

  private convertID(id: string | number): number {
    return (typeof id === 'string')? parseInt(id, 10): id;
  }

}
