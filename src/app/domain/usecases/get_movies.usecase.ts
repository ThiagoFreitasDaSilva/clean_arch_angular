import { GetMoviesRepository } from "../repositories/get_movies.repository";

export class GetMoviesUseCase {
    private moviesRepositoryInstance: GetMoviesRepository;

    constructor(readonly moviesRepository: GetMoviesRepository){
        this.moviesRepositoryInstance = moviesRepository;
    }

    public getMovies() {
        this.moviesRepositoryInstance.getAllMovies();
    }

}