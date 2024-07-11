import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  currentSortField: 'title' | 'release_date' = 'title';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
        this.sortMovies(this.currentSortField);
      },
      error => console.error('Error fetching movies:', error)
    );
  }

  // sortMovies() {
  sortMovies(field: 'title' | 'release_date') {
    this.currentSortField = field;
    this.movies.sort((a, b) => {
      if (field === 'title') {
        return a.title.localeCompare(b.title);
      } else {
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
      }
    });
  }

  upvote(movie: Movie) {
    this.movieService.upvoteMovie(movie.id).subscribe(
      () => {
        movie.upvotes++;
      },
      error => console.error('Error upvoting movie:', error)
    );
  }

  downvote(movie: Movie) {
    this.movieService.downvoteMovie(movie.id).subscribe(
      () => {
        movie.downvotes++;
      },
      error => console.error('Error downvoting movie:', error)
    );
  }

  changeSortField(field: 'title' | 'release_date') {
    this.currentSortField = field;
    this.sortMovies(field);
  }
}