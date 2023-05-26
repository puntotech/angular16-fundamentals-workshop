import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';
import { HeroFormComponent } from 'src/app/components/hero-form/hero-form.component';
import { HeroService } from 'src/app/shared/services/hero.service';
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

  /* @Input() private readonly id!: string; // Input from param */
   //@Input() public readonly hero: Hero; // Input from Resolver

  public hero$ = this.activatedRoute.data.pipe(map(({ hero }) => hero));

  constructor() {
/*     console.log('id', this.id);
    this.hero = this.heroService.findOne(parseInt(this.id, 10));
    console.log('hero', this.hero); */
  }


  updateHero(hero: Hero){
    console.log("Updating Hero", hero);
    this.heroService.update(hero);
    this.router.navigate(['/home']);

  }
}
