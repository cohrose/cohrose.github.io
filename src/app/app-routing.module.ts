import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewPokemonComponent } from './components/view-pokemon/view-pokemon.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view/:name', component: ViewPokemonComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
