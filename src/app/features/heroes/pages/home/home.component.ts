import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeroListComponent } from 'src/app/features/heroes/components/hero-list/hero-list.component';
import { HeroNewComponent } from '../hero-new/hero-new.component';
import { HeroService } from 'src/app/features/heroes/services/hero.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  HeroListComponent, HeroNewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private readonly heroService = inject(HeroService);
  public heroes$ = this.heroService.findAll();
  /*
   constructor(private readonly heroService: HeroService){}
 */

}
