import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8000/api/movies/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  upvoteMovie(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}${id}/upvote/`, {});
  }

  downvoteMovie(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}${id}/downvote/`, {});
  }
}