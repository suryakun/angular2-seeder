import {Component} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {Dashboard} from './dashboard.component';
import {Manage} from './manage.component';

@Routes([
	{path: '/', component: Dashboard},
	{path: '/manage', component: Manage}
])

@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES],
	template: `
		<nav class="navbar navbar-light bg-faded">
		  	<ul class="nav navbar-nav">
		    <li class="nav-item active">
		      <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
		    </li>
		    <li class="nav-item">
		      <a class="nav-link" href="#">Manage</a>
		    </li>
		  	</ul>
		</nav>
		<router-outlet></router-outlet>
	`
})

export class App {
	constructor(private router: Router) {

	}

	ngOnInit() {
		this.router.navigate(['/']);
	}
}
