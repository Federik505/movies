import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie.movie';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss'
})
export class MovielistComponent implements OnInit{
  private movieService: MovieService = inject(MovieService)

  movies: Movie[] = []

  ngOnInit(): void {
      this.movieService.getmovies().subscribe((movies) =>{
        this.movies = movies;
      })
  }
}
