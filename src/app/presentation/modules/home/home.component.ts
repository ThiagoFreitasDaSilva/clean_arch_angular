import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { GetMoviesRepositoryImpl } from 'src/app/data/repositories/get_movies.repository.impl';
import { GetMoviesUseCase } from '../../../domain/usecases/get_movies.usecase';
import { HomeStore } from '../../stores/home/home.store';
import { HomeState } from '../../stores/home/home_state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public textHomeState: HomeState = {namesList: []};
  private moviesUseCase: GetMoviesUseCase = new GetMoviesUseCase(new GetMoviesRepositoryImpl());

  constructor(
    private homeStore: HomeStore,    
  ) { }

  ngOnInit(): void {
    this.homeStore.addNameToList("HOME STORE");
    this.homeStore.getCurrentObservableState().pipe(first()).subscribe((homeState: HomeState) => {
      this.textHomeState = homeState
    }); 
    this.moviesUseCase.getMovies();
  }

}
