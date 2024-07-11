import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';

export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'actors', component: ActorListComponent },
//   { path: '', redirectTo: '/movies', pathMatch: 'full' }
];