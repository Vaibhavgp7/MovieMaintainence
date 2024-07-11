import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = 'http://localhost:8000/api/actors/';

  constructor(private http: HttpClient) { }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl);
  }
}