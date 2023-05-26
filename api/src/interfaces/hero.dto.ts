import { Hero, PowerStats, alignments } from "./hero.interface";

export class HeroDTO {

  #id: number;
  #name: string;
  #image: string;
  #alignment: alignments;
  #powerstats: PowerStats;

  constructor(hero: Hero){
    this.#id = hero.id;
    this.#alignment = hero.biography.alignment;
    this.#image = hero.images.md;
    this.#powerstats = hero.powerstats;
  }

  toJson(){
    return {
      id: this.#id,
      name: this.#name,
      image: this.#image,
      alignment: this.#alignment,
      powerstats: this.#powerstats,
    }
  }
}



