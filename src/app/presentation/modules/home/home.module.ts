import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeStore } from '../../stores/home/home.store';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    providers: [
        HomeStore,
    ],
    exports: [
        HomeComponent,
    ],
})
export class HomeModule { }
