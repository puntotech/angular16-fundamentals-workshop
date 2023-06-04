import * as HeroActions from 'src/app/features/heroes/state';

import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/features/heroes/interfaces/hero.interface';
import { HeroFormComponent } from '../../components/hero-form/hero-form.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hero-new',
  standalone: true,
  imports: [CommonModule, HeroFormComponent],
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent {
  private readonly store = inject(Store);


  addHero(_hero: Hero){
    const hero: Hero = {
      ..._hero,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    console.log("Creating Hero", hero);
    this.store.dispatch(HeroActions.createHero({ hero }));
  }
}
