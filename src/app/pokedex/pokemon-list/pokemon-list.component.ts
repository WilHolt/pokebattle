import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemonsService/pokemons-service.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit, OnChanges {
  pokemon:any;
  popupTrigger:boolean = false;
  constructor(private pService: PokemonsService) { }

  async ngOnInit()  {
  this.pokemon = this.pService.getAll()
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

}
