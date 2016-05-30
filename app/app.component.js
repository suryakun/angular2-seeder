"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var manage_component_1 = require('./manage.component');
var App = (function () {
    function App(router) {
        this.router = router;
    }
    App.prototype.ngOnInit = function () {
        this.router.navigate(['/']);
    };
    App = __decorate([
        router_1.Routes([
            { path: '/', component: dashboard_component_1.Dashboard },
            { path: '/manage', component: manage_component_1.Manage }
        ]),
        core_1.Component({
            selector: 'app',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n\t\t<nav class=\"navbar navbar-light bg-faded\">\n\t\t  \t<ul class=\"nav navbar-nav\">\n\t\t    <li class=\"nav-item active\">\n\t\t      <a class=\"nav-link\" href=\"#\">Dashboard <span class=\"sr-only\">(current)</span></a>\n\t\t    </li>\n\t\t    <li class=\"nav-item\">\n\t\t      <a class=\"nav-link\" href=\"#\">Manage</a>\n\t\t    </li>\n\t\t  \t</ul>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map