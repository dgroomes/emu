import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component'
import { routingModule } from './app.routing'
import { JokesComponent } from './components/jokes.component'
import { AboutComponent } from './components/about.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routingModule
    ],
    declarations: [
        AppComponent,
        JokesComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }