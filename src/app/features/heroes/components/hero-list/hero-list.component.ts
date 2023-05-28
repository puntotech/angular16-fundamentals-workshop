import { Component, Input, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/features/heroes/interfaces/hero.interface';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { HeroPowerstatsChange } from 'src/app/features/heroes/interfaces/hero-powerstats-change.interface';
import { HeroService } from 'src/app/features/heroes/services/hero.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, HeroItemComponent],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  @Input() heroes!: Hero[];
  private readonly heroService = inject(HeroService);

  onPowerstatsChange({ hero, powerstat, value}: HeroPowerstatsChange) {
    this.heroService.updatePowerstat(hero, powerstat, value).subscribe(
      {
        next: () => {},
        error: console.log,
      }
    );
  }
  onDelete(hero: Hero){
    this.heroService.delete(hero).subscribe(
      {
        next: () => this.heroes = this.heroes.filter(_hero => _hero.id !== hero.id),
        error: console.log,
      }
    )
  }
}
