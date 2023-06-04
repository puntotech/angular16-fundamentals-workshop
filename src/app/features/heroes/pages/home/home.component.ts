import * as HeroesActions from 'src/app/features/heroes/state';

import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeroListComponent } from 'src/app/features/heroes/components/hero-list/hero-list.component';
import { HeroNewComponent } from '../hero-new/hero-new.component';
import { Store } from '@ngrx/store';
import { selectHeroes } from '../../state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  HeroListComponent, HeroNewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private readonly store = inject(Store);
  public heroes$ = this.store.select(selectHeroes);

   constructor(){
    this.store.dispatch(HeroesActions.loadHeroes());
   }


}
