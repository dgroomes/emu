import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class JokeService {

    constructor(private http: Http) {}

    getOne() : Observable<Response> {
        return this.http.get('http://localhost:8080/api/jokes')
    }
}