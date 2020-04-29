import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemonsService/pokemons-service.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit {
  pokemon:any;

  constructor(private pService: PokemonsService) { }

  async ngOnInit()  {
  this.pokemon = this.pService.getAll()
  }

}
