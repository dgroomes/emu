/***********************************************HACKY WEIRD -- BEGIN****************************************************
 * This is the hacky way (in my eyes) of describing resources for Webpack to include in its build artifact. It's a hack
 * in my opinion because it is a non-normal usage of the "import" keyword. You might think, "I don't see anywhere in
 * this TypeScript file using zone.js or reflect-metadata, so why import it? Is it an unused import?" Anyway, these
 * libraries are required for Angular 2. Also sort of a hack, right?
 **********************************************************************************************************************/
import 'zone.js/lib/browser/zone-microtask'
import 'reflect-metadata'
/***********************************************HACKY WEIRD -- END*****************************************************/

import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);