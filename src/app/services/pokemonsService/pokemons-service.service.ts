import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  allPokemons:any;
  constructor(private http: HttpClient) {
   }

    getAll(): Observable<any>{
      let pokemonNumber=1;
    while( pokemonNumber< 151){
      this.http.get("https://pokeapi.co/api/v2/pokemon/2").subscribe(  pokemon => {
        this.allPokemons.push( pokemon ) 
      })
    }
    return this.allPokemons; 
  }

}
