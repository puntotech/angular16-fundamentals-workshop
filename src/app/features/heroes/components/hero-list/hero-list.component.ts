import * as HeroesActions from 'src/app/features/heroes/state/'

import { Component, Input, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/features/heroes/interfaces/hero.interface';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { HeroPowerstatsChange } from 'src/app/features/heroes/interfaces/hero-powerstats-change.interface';
import { HeroService } from 'src/app/features/heroes/services/hero.service';
import { Store } from '@ngrx/store';

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
  private readonly store = inject(Store)

  onPowerstatsChange({ hero, powerstat, value}: HeroPowerstatsChange) {
    this.heroService.updatePowerstat(hero, powerstat, value).subscribe(
      {
        next: () => {},
        error: console.log,
      }
    );
  }
  onDelete(hero: Hero){
    this.store.dispatch(HeroesActions.deleteHero({ hero }));
  }
}
