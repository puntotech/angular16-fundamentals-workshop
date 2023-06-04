import * as HeroActions from 'src/app/features/heroes/state';

import { Component, ViewChild, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/features/heroes/interfaces/hero.interface';
import { HeroFormComponent } from '../../components/hero-form/hero-form.component';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-hero-update',
  standalone: true,
  imports: [CommonModule, HeroFormComponent],
  templateUrl: './hero-update.component.html',
  styleUrls: ['./hero-update.component.scss']
})
export class HeroUpdateComponent {
  private readonly store = inject(Store);
  private readonly activatedRoute = inject(ActivatedRoute);

  public hero$ = this.activatedRoute.data.pipe(map(({ hero }) => hero));

  @ViewChild(HeroFormComponent) HeroFormComponent!: HeroFormComponent;

  updateHero(hero: Hero){
    console.log("Updating Hero", hero);
    this.store.dispatch(HeroActions.updateHero({ hero }));
  }

  canDeactivate(){
    if(!this.HeroFormComponent.isSubmitted && this.HeroFormComponent.heroForm.dirty){
      const value = confirm('Are you sure to leave this page? You have unsaved changes.');
      return value;
    }
    return true;
  }
}
