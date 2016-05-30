"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
platform_browser_dynamic_1.bootstrap(app_component_1.App, [router_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]);
//# sourceMappingURL=main.js.map