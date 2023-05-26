import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero, PowerStat } from 'src/app/shared/interfaces/hero.interface';
import { RouterLink, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeroPowerstatsChange } from 'src/app/shared/interfaces/hero-powerstats-change.interface';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {
  @Input( { required: true}) hero! : Hero;
  @Output() powerstatsChange: EventEmitter<HeroPowerstatsChange> = new EventEmitter();

  decrementPowerStats(powerstat: PowerStat): void{
    this.powerstatsChange.emit({ hero: this.hero, powerstat, value: -1 });
  }

  incrementPowerStats(powerstat: PowerStat): void{
    this.powerstatsChange.emit({ hero: this.hero, powerstat, value: 1 });
  }
}
