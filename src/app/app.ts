import {bootstrap, Component, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http'

@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    template: `
        <h2>hello there. here some jokes</h2>
        <div *ng-for="#joke of jokes">
            {{joke.joke}}
        </div>
    `,
    directives: [NgFor]
})
export class MyAppComponent {

    jokes:Array<String>;

    constructor(http:Http) {
        http.get('http://api.icndb.com/jokes/random/3')
            .map(res => res.json().value)
            .subscribe(jokes => this.jokes = jokes)
    }
}

bootstrap(MyAppComponent);