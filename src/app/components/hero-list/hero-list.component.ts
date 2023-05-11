import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { HeroPowerstatsChange } from 'src/app/shared/interfaces/hero-powerstats-change.interface';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, HeroItemComponent],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  @Input() heroes!: Hero[];

  onPowerstatsChange({ hero, powerstat, value}: HeroPowerstatsChange) {
    hero.powerstats[powerstat] += value;
  }
}
