import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  types: any[] = []
  allPokemons:any[] = []
  constructor(private http: HttpClient) {
   }

    async getAll(): Promise<any>{
      let pokemonNumber=1;
    while( pokemonNumber< 151){
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`).subscribe(  pokemon => {
        this.allPokemons.push( pokemon ) 
      })
      pokemonNumber++
    }
    return this.allPokemons; 
  }
  getPokemonDetails(pokemonId){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  }
  getTypeList(){
    let trigger:boolean = true
    let typeNumber = 0;
    while(trigger){
      this.http.get(`https://pokeapi.co/api/v2/type/${typeNumber}`).subscribe(  type => {
        if(type != null){
          trigger = false
        }
        this.types.push( type ) 
      })
      typeNumber++
    }
  }
}
