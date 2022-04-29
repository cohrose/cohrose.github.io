export interface Stats {
  abilities: Ability[];
  location_area_encounters: string;
  moves: Move[];
  name: string;
  species: Species;
  sprites: Sprite;
  types: Type[];
}

interface Ability {
  name: string;
  url: string;
}

interface Move {
  name: string;
  url: string;
}

interface Species {
  name: string;
  url: string;
}

interface Sprite {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: any;
}

interface Type {
  name: string;
  url: string;
}
