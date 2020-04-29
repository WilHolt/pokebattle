import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from './pokemonsService/pokemons-service.service';
import { UsersService } from './usersServices/users-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  // providers:[PokemonsService, UsersService]
})
export class ServicesModule { }
