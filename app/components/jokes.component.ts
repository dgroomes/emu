import {Component} from '@angular/core'
import {JokeService} from '../services/jokes.service'
import {Joke} from "../domain/joke";

@Component({
    selector: 'my-jokes',
    template: `
        <h2>hello there. here some jokes</h2>      
        <div *ngFor="let joke of jokes">
            {{joke.joke}}
        </div>
    `,
    providers: [JokeService]
})
export class JokesComponent {

    jokes:Array<Joke> = [];

    private jokeService : JokeService;

    constructor(jokeService : JokeService) {
        this.jokeService = jokeService;
        this.getJokes()
    }

    getJokes() {
        this.jokeService.getSomeJokes().subscribe(jokes => jokes.forEach(joke => this.jokes.push(joke)))
    }


}