import { Component, Input, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';
import { HeroFormComponent } from 'src/app/components/hero-form/hero-form.component';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-new',
  standalone: true,
  imports: [CommonModule, HeroFormComponent],
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent {
  private readonly heroService = inject(HeroService);
  private readonly router = inject(Router);


  addHero(_hero: Hero){
    const hero: Hero = {
      ..._hero,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    console.log("Creating Hero", hero);
    this.heroService.add(hero).subscribe({
        next: () => this.router.navigate(['/home']),
        error: (error) => console.log(error),
      })
  }

}
