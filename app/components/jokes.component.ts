import {Component} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {NgFor} from 'angular2/common'
import {Observable} from 'rxjs/Observable'
import {JokeService} from '../services/jokes.service'

@Component({
    selector: 'my-jokes',
    directives: [NgFor],
    template: `
        <h2>hello there. here some jokes</h2>
        <div *ngFor="#joke of jokes">
            {{joke.joke}}
        </div>
    `,
    providers: [JokeService]
})
export class JokesComponent {

    jokes:Array<String>;

    constructor(jokesService : JokeService) {
        jokesService.getOne()
            .subscribe(res => this.jokes = res.json().value)
    }
}