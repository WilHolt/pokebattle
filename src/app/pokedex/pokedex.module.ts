import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PokemonListComponent, PokemonDetailsComponent]
})
export class PokedexModule { }
