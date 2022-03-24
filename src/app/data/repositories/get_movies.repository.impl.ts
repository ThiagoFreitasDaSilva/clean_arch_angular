import { MovieEntity } from "src/app/domain/entities/movie.entity";
import { GetMoviesRepository } from "src/app/domain/repositories/get_movies.repository";

export class GetMoviesRepositoryImpl implements GetMoviesRepository{
    getAllMovies(): MovieEntity[] {
        console.log("IMPLEMENTAÇão REPOSITório");
       return new Array<MovieEntity>();
    }
}