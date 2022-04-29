import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, tap, switchMap } from 'rxjs/operators';
import { Stats } from 'src/app/shared/interfaces/pokemon-stats';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.scss']
})
export class ViewPokemonComponent implements OnInit {
  pokemon: string;
  stats: Stats;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params: ParamMap) => (this.pokemon = params.get('name'))),
        switchMap((x: string) => this.pokemonService.getOne(x)),
        tap((x: Stats) => (this.stats = x)),
        tap(() => console.log(this.stats))
      )
      .subscribe();
  }

  getArt(): string {
    return this.stats.sprites.other['official-artwork'].front_default;
  }

  getType(type) {
    console.log(type);
  }
}
