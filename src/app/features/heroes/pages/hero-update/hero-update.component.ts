import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/features/heroes/interfaces/hero.interface';
import { HeroFormComponent } from '../../components/hero-form/hero-form.component';
import { HeroService } from 'src/app/features/heroes/services/hero.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-hero-update',
  standalone: true,
  imports: [CommonModule, HeroFormComponent],
  templateUrl: './hero-update.component.html',
  styleUrls: ['./hero-update.component.scss']
})
export class HeroUpdateComponent {
  private readonly heroService = inject(HeroService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public hero$ = this.activatedRoute.data.pipe(map(({ hero }) => hero));

  @ViewChild(HeroFormComponent) HeroFormComponent!: HeroFormComponent;

  constructor() {
/*     console.log('id', this.id);
    this.hero = this.heroService.findOne(parseInt(this.id, 10));
    console.log('hero', this.hero); */
  }

  updateHero(hero: Hero){
    console.log("Updating Hero", hero);
    this.heroService.update(hero).subscribe({
      next: () =>  this.router.navigate(['/hero']),
      error:  (error) => alert(error),
    })
  }

  canDeactivate(){
    if(!this.HeroFormComponent.isSubmitted && this.HeroFormComponent.heroForm.dirty){
      const value = confirm('Are you sure to leave this page? You have unsaved changes.');
      return value;
    }
    return true;
  }
}
