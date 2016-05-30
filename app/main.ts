import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app.component';
import {ROUTER_PROVIDERS, Router} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {provide} from '@angular/core';

bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);