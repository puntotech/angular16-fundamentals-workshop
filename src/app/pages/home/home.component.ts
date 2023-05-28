import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';
import { HeroListComponent } from 'src/app/components/hero-list/hero-list.component';
import { HeroNewComponent } from 'src/app/pages/hero/hero-new/hero-new.component';
import { HeroService } from 'src/app/shared/services/hero.service';

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
