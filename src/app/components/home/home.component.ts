import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemon;
  constructor() {}

  ngOnInit(): void {
    this.pokemon = [
      {
        name: 'Pikachu',
        type: 'Electric',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      {
        name: 'Squirtle',
        type: 'Water',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
      },
      {
        name: 'Charmander',
        type: 'Fire',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      },
      {
        name: 'Togepi',
        type: 'Fairy',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png'
      },
      {
        name: 'Ponyta',
        type: 'Fire',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png'
      },
      {
        name: 'Abra',
        type: 'Psychic',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png'
      },
      {
        name: 'Poliwag',
        type: 'Water',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png'
      },
      {
        name: 'Eevee',
        type: 'Normal',
        sprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
      }
    ];
  }
}
