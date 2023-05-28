import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';
import { heroNameValidator } from 'src/app/shared/validators/hero-name.validator';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit{
  @Input() hero!: Hero;
  @Output() sendHero: EventEmitter<Hero> = new EventEmitter();

  private readonly formBuilder = inject(FormBuilder);
  public message = "";
  public heroForm!: FormGroup;
  public powerstats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
  public textButton = "";

  private defaultHero =   {
    id:  Math.floor(Math.random() * 10000) + 1000,
    name: 'Joker',
    image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/370-joker.jpg",
    alignment: 'bad',
    powerstats: {
      intelligence: 100,
      strength: 10,
      speed: 12,
      durability: 60,
      power: 43,
      combat: 70,
    }
  };

  ngOnInit() {
    const heroSelected = this.hero ? this.hero : this.defaultHero;
    this.textButton = this.hero ? 'Update': 'Create';

    this.heroForm = this.formBuilder.group({
      name: [heroSelected.name, [Validators.required, /* heroNameValidator() */]],
      image: [heroSelected.image],
      alignment: [heroSelected.alignment],
      powerstats: this.formBuilder.group({
        intelligence: [heroSelected.powerstats.intelligence, [Validators.required, Validators.max(100), Validators.min(0)]],
        strength: [heroSelected.powerstats.strength, [Validators.required, Validators.max(100), Validators.min(0)]],
        speed: [heroSelected.powerstats.speed, [Validators.required, Validators.max(100), Validators.min(0)]],
        durability: [heroSelected.powerstats.durability , [Validators.required, Validators.max(100), Validators.min(0)]],
        power: [heroSelected.powerstats.power, [Validators.required, Validators.max(100), Validators.min(0)]],
        combat: [heroSelected.powerstats.combat , [Validators.required, Validators.max(100), Validators.min(0)]],
      })
    });
  }

  saveHero(){
    if (this.heroForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const hero: Hero = {
        id: this.hero?.id || this.defaultHero.id ,
        ...this.heroForm.value,
        powerstats: {...this.heroForm.value.powerstats },
      };
      console.log("Saving Hero", hero);
      this.sendHero.emit(hero);
    }
  }

}
