import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PokemonListComponent, PokemonDetailsComponent]
})
export class PokedexModule { }
