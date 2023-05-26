import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';
import { HeroFormComponent } from 'src/app/components/hero-form/hero-form.component';
import { HeroService } from 'src/app/shared/services/hero.service';

@Component({
  selector: 'app-hero-update',
  standalone: true,
  imports: [CommonModule, HeroFormComponent],
  templateUrl: './hero-update.component.html',
  styleUrls: ['./hero-update.component.scss']
})
export class HeroUpdateComponent {
  private readonly heroService = inject(HeroService);


  updateHero(_hero: Hero){
    const hero: Hero = {
      ..._hero,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    console.log("Updating Hero", hero);
    //this.heroService.update()
  }
}
