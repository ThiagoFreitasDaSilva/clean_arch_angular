import { HomeState } from "./home_state";
import {ComponentStore} from "@ngrx/component-store";
import { Injectable } from "@angular/core";
import { first, Observable, of, tap } from "rxjs";

@Injectable()
export class HomeStore extends ComponentStore<HomeState>{

    constructor(){
        super({namesList: []});
    }

    public addNewNameWithAnEffect(newName: string){
        return this.effect(() => {   
            
           //Do Something 
            
            return of(tap({
                next: () => this.addNameToList(newName),
                error: (e) => {throw (new ErrorEvent('Ocorreu um erro: '+e))},
            }));
        });
    }

    public addNameToList(newName: string) {
        this.getCurrentObservableState().pipe(first()).subscribe((currentState) => {
            this.setState(() => {
                let newNameList = currentState.namesList;
                newNameList.push(newName);
                return {...currentState, ...{namesList: newNameList}};
              });
        });       
    }

    public getCurrentObservableState(): Observable<HomeState> {
        return this.state$;
    }    
}