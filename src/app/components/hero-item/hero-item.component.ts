import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero, PowerStat } from 'src/app/shared/interfaces/hero.interface';

import { CommonModule } from '@angular/common';
import { HeroPowerstatsChange } from 'src/app/shared/interfaces/hero-powerstats-change.interface';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {
 /*
  TODO 202:
   Crea un atributo hero del tipo Hero, que sea recibido por el componente padre a través del decorador @Input,
   y que este campo sea requerido.
  Crea un evento de salida denominado powerstatsChange que emita objetos del tipo HeroPowerstatsChange
 */
  decrementPowerStats(powerstat: PowerStat): void{
  /*   TODO 203: Emite un objeto del tipo HeroPowerStatsChange que esté compuesto por los siguientes datos:
          hero: this.hero,
          powerstat,
          value: -1 */
  }

  incrementPowerStats(powerstat: PowerStat): void{
    /*   TODO 204: Emite un objeto del tipo HeroPowerStatsChange que esté compuesto por los siguientes datos:
          hero: this.hero,
          powerstat,
          value: 1 */
  }
}
