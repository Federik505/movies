import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie } from '../interfaces/movie.movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  http: HttpClient = inject(HttpClient)
  private serverUrl = 'http://localhost:4200/assets/data/movies.json' 

  getmovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.serverUrl)
  }
}
