import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon.interfaces';
import { PokemonsService } from 'src/app/services/pokemonsService/pokemons-service.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.less']
})
export class PokemonDetailsComponent implements OnInit, AfterViewInit {
  pokemon:IPokemon
  pokemonName:string
  
  constructor(private pService : PokemonsService, private actualRoute:ActivatedRoute, private router: Router) {
    router.events.subscribe((event: NavigationStart) => {

        this.actualRoute.params.subscribe(param => {
          this.pokemonName = param.name
        })
        this.getPokemon()
    });

   }
  ngAfterViewInit(){
    
    // this.getPokemon()
  }
  ngOnInit() {
       
  
    
  }
  getPokemon(){
    this.pService.getPokemonDetails(this.pokemonName).subscribe( (pokeResult:any) =>{
      console.log(pokeResult)
    this.pokemon = {
      name:pokeResult.name,
      moves : pokeResult.moves,
      weight : pokeResult.weight,
      height : pokeResult.height,
      stats : pokeResult.stats,
      types : pokeResult.types,
      base_exp : pokeResult.base_experience,
    }

    })
    console.log(this.pokemon, 'pokedet')
  }

}
