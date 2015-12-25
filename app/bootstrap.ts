import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';

import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/core';
import 'angular2/router';
import 'angular2/http';

import 'rxjs';

import {bootstrap} from 'angular2/platform/browser';
import {MyAppComponent} from './app.component'

bootstrap(MyAppComponent);