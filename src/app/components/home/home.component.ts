import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { tap } from 'rxjs/operators';
import { AllPokemon, Pokemon } from 'src/app/shared/interfaces/all-pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemon: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.pokemonService
      .getAll()
      .pipe(tap((x: AllPokemon) => (this.pokemon = x.results)))
      .subscribe();
  }

  getNumber(url: string) {
    let split = url.split('/');
    split = split.filter(x => x != '');
    return split[split.length - 1];
  }

  createUrl(url: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getNumber(
      url
    )}.png`;
  }

  curateName(name: string): string {
    let newName;
    if (name.includes('-f')) {
      newName = name.replace('-f', ' (F)');
    } else if (name == 'mr-mime') {
      newName = 'Mr-Mime';
    } else if (name.includes('-m')) {
      newName = name.replace('-m', ' (M)');
    } else {
      newName = name;
    }
    return newName;
  }
}
