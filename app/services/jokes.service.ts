import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import {Joke} from "../domain/joke";

@Injectable()
export class JokeService {

    constructor(private http: Http) {}

    getSomeJokes() : Observable<Array<Joke>> {
        return this.http.get('/api/jokes').map(resp => {
            var json:any = resp.json();
            return json.value.map( (joke : any) => new Joke(joke.id, joke.joke))
        })
    }
}