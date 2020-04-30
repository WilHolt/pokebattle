import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemonsService/pokemons-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit, OnChanges {
  pokemon:any;
  popupTrigger:boolean = false;
  constructor(private pService: PokemonsService, private router:Router) { }

  async ngOnInit()  {
  this.pokemon = await this.pService.getAll()
  await console.log(this.pokemon)
  }
  ngOnChanges(changes: SimpleChanges){
     console.log(changes)
  }
  openPopup(){
    
    this.popupTrigger = true;

  }
  closePopup(event){
    this.popupTrigger = event;
  }
  getPokeDetails(pokemonName){
    if(localStorage.getItem('user') != null){
      this.router.navigate([`/pokemon/${pokemonName}`])
    }else{
      this.openPopup()
    }
  }
}
