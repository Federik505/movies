import { Component, Input } from '@angular/core';
import { Movie } from '../../../interfaces/movie.movie';

@Component({
  selector: 'app-moviethumbnails',
  standalone: true,
  imports: [],
  templateUrl: './moviethumbnails.component.html',
  styleUrl: './moviethumbnails.component.scss'
})
export class MoviethumbnailsComponent {
  @Input()
  movie!: Movie;
}
