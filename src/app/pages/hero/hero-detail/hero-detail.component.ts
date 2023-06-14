import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroItemComponent } from 'src/app/components/hero-item/hero-item.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, HeroItemComponent],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  /* TODO 506: Crea un observable llamado hero$ que obtenga el héroe del ActivatedRoute */
}
