import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from './shared/interfaces/hero.interface';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroNewComponent } from './components/hero-new/hero-new.component';
import { HeroService } from './shared/services/hero.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroListComponent, HeroNewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-fundamentals';
  /* TODO 401: Injecta el servicio HeroService en una variable llamada heroService privada y de solo lectura */
  /* TODO 402: Almacena en la variable heroes, el resultado de la invocación del método findAll() del servicio HeroService */

  addHero(hero: Hero){
    /* TODO 403: Invoca al método add del servicio HeroService */
  }
}
