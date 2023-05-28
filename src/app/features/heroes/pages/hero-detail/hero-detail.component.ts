import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroItemComponent } from 'src/app/features/heroes/components/hero-item/hero-item.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, HeroItemComponent],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  public hero$ = this.activatedRoute.data.pipe(map(({ hero }) => hero));

}
