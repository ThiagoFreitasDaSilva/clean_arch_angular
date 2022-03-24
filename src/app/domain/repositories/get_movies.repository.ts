import { Injectable } from '@angular/core';
import { MovieEntity } from '../entities/movie.entity';

@Injectable()
export abstract class GetMoviesRepository {
    abstract getAllMovies(): Array<MovieEntity>;
}
