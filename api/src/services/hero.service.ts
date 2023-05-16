import { Hero } from '../interfaces/hero.interface';

export class HeroService {
  private heroes: Hero[];

  public findAll() {
    return this.heroes;
  }

  public find(id: string) {
    return this.heroes.find((hero) => hero.id === id);
  }

  public add(hero: Hero) {
    this.heroes = [...this.heroes, hero];
    return this.heroes;
  }

  public async delete(id: string) {
    this.heroes = this.heroes.filter((hero) => hero.id === id);
    return this.heroes;
  }

  public async update(id: string, updatedHero: Hero | Partial<Hero>) {
    this.heroes = this.heroes.map((hero) =>
      hero.id === id ? { ...hero, ...updatedHero } : hero
    );
    return this.heroes;
  }
}
