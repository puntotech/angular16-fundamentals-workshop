export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  appearance: any;
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[],
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string | null;
    alignment: alignments;
  };
  work: any;
  connections: any;
  images: {
    xs: string,
    sm: string,
    md: string,
    lg: string,
  }
}

export interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type PowerStat = keyof PowerStats;

export type alignments = "good" | "bad" | "-" | "neutral";
