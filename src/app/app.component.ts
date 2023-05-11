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
  private readonly heroService = inject(HeroService);
  public heroes = this.heroService.findAll();
  /*
   constructor(private readonly heroService: HeroService){}
 */

  addHero(hero: Hero){
    this.heroService.add(hero);
  }
}
