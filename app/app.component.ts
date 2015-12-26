import {Component} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {NgFor} from 'angular2/common'
import {Observable} from "rxjs/Observable"
import {JokeService} from "./jokes.service"

@Component({
    selector: 'my-app',
    directives: [NgFor],
    template: `
        <h2>hello there. here some jokes</h2>
        <div *ngFor="#joke of jokes">
            {{joke.joke}}
        </div>
    `,
    viewProviders: [HTTP_PROVIDERS]
})
export class MyAppComponent {

    jokes:Array<String>;

    constructor(jokesService : JokeService) {
        jokesService.getOne()
            .subscribe(res => this.jokes = res.json().value)
    }
}