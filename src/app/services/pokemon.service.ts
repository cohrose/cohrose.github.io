import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AllPokemon } from '../shared/interfaces/all-pokemon';
import { Stats } from '../shared/interfaces/pokemon-stats';

/** Base header */
const baseHeaders = { 'content-type': 'application/json' };

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<AllPokemon> {
    return this.http.get<AllPokemon>(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    );
  }

  getOne(name: string): Observable<Stats> {
    return this.http.get<Stats>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
