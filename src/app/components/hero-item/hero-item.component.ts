import { Hero, PowerStat } from 'src/app/shared/interfaces/hero.interface';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {
  public hero : Hero = {
    id: 620,
    name: "Spider-Man",
    powerstats: {
      intelligence: 90,
      strength: 55,
      speed: 67,
      durability: 75,
      power: 74,
      combat: 85
    },
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg',
    alignment: "good",
  };

  public isHeroVillain = this.hero.alignment === "bad";

  decrementPowerStats(powerstat: PowerStat): void{
    const value = this.hero.powerstats[powerstat];
    if(value > 0){
      this.hero.powerstats[powerstat]--;
    }
  }

  incrementPowerStats(powerstat: PowerStat): void{
    const value = this.hero.powerstats[powerstat];
    if(value < 100){
      this.hero.powerstats[powerstat]++;
    }
  }
}
