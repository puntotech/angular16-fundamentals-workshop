import { Hero, PowerStats, alignments } from "./hero.interface";

export class HeroDTO {

  #id: number;
  #name: string;
  #image: string;
  #alignment: alignments;
  #powerstats: PowerStats;

  constructor(){}

  fromJson(hero: any){
    this.#id = hero.id;
    this.#name = hero.name;
    this.#alignment = hero.alignment;
    this.#image = hero.image;
    this.#powerstats = hero.powerstats;
    return this;
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
  fromHero(hero: Hero){
    this.#id = hero.id;
    this.#name = hero.name;
    this.#alignment = hero.biography.alignment;
    this.#image = hero.images.md;
    this.#powerstats = hero.powerstats;
    return this;
  }
  toHero(): Hero{
    return {
      id: this.#id,
      name: this.#name,
      slug: "",
      powerstats: this.#powerstats,
      appearance: "",
      biography: {
        fullName: "",
        alterEgos: "",
        aliases: [],
        placeOfBirth: "",
        firstAppearance: "",
        publisher: "",
        alignment: this.#alignment,
      },
      work: "",
      connections: "",
      images: {
        xs: this.#image,
        sm: this.#image,
        md: this.#image,
        lg: this.#image,
      }


    }
  }
}



