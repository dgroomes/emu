import {Component} from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
        <h1>Emu Fatty Stack</h1>
        <h3>github/dgroomes</h3>
        <a routerLink="/about">About</a>
        <a routerLink="/jokes">Jokes</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}