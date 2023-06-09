import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Hero } from 'src/app/shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-new',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent {
  @Output() add: EventEmitter<Hero> = new EventEmitter();

  /* TODO 301: Inyecta el servicio FormBuilder en un atributo llamado "formBuilder" que sea privado y de solo lectura */
  public message = "";

  /* TODO 302: Crea un atributo denominado heroForm que sea del tipo FormGroup que inicialmente se cree usando "formBuilder", debe disponer de
  los siguientes controles con los siguientes valores por defecto y validaciones:
    name: 'Joker', Requerido
    image: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/370-joker.jpg"
    alignment: "bad"
    powerstats: El cual es un FormGroup a su vez:
      intelligence: 100, requerido, minimo 0 y máximo 100
      strength: 10, requerido, mínimo 0 y máximo 100
      speed: 12, requerido, mínimo 0 y máximo 100
      durability: 60, requerido, mínimo 0 y máximo 100,
      power: 43, requerido, mínimo 0 y máximo 100
      combat: 70, requerido mínimo 0 y máximo 100
  */


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
