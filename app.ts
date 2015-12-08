import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: `<h2>hello there</h2>`
})
export class MyAppComponent {}

bootstrap(MyAppComponent);