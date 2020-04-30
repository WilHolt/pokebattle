import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokedex/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokedex/pokemon-details/pokemon-details.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path:'', component:PokemonListComponent,
    canActivateChild:[AuthGuard],
    children: [
      {path:'pokemon/:name', component:PokemonDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
