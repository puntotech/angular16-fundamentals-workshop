import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';
import { heroNameValidator } from 'src/app/shared/validators/hero-name.validator';

@Component({
  selector: 'app-hero-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent {
  @Output() add: EventEmitter<Hero> = new EventEmitter();

  private readonly formBuilder = inject(FormBuilder);
  public message = "";
  public heroForm: FormGroup = this.formBuilder.group({
    name: ['Joker', [Validators.required, heroNameValidator()]],
    image: ["https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/370-joker.jpg"],
    alignment: ["bad"],
    powerstats: this.formBuilder.group({
      intelligence: [100, [Validators.required, Validators.max(100), Validators.min(0)]],
      strength: [10, [Validators.required, Validators.max(100), Validators.min(0)]],
      speed: [12, [Validators.required, Validators.max(100), Validators.min(0)]],
      durability: [60, [Validators.required, Validators.max(100), Validators.min(0)]],
      power: [43, [Validators.required, Validators.max(100), Validators.min(0)]],
      combat: [70, [Validators.required, Validators.max(100), Validators.min(0)]],
    })
  });
  public powerstats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];

  addHero(){


    if (this.heroForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const hero: Hero = {
        id: Math.floor(Math.random() * 1000) + 1,
        ...this.heroForm.value,
        powerstats: {...this.heroForm.value.powerstats },
      };
      console.log("Creating Hero", hero);
      this.add.emit(hero);
    }
  }

}
