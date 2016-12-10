import { Component, Input, OnInit,
			trigger,
			state,
			style,
			transition,
			animate
   } from '@angular/core';
import { SortElement } from '../sort.element';
import { FunctionService } from '../functions.service';

import { Hero } from './hero' 

@Component({
	selector: 'my-animate',
	template: `
	<div class="row">
		<ul class="nav nav-pills">
			<li  class="nav-item">
				<a routerLink="/" class="nav-link" routerLinkActive="active" >HOME</a>
			</li>
		</ul>	
	</div>
	<!--  DELETE ABOVE LATER...  -->	

	<div class="jumbotron">
		<div class="bg-success" >
			my-animate
		  <div>
		    <button class="btn secondary"
		    	*ngFor="let hero of heroes"
		        [@shrinkOut]="hero.state"
		        (click)="hero.toggleState()">
		      {{hero.name}}
		    </button>
		  </div>	
		</div>		
	</div>
	
	`,
	styles: [`
	`],
	animations: [
	  trigger('heroState', [
	    state('inactive', style({transform: 'translateX(0) scale(1)'})),
	    state('active',   style({transform: 'translateX(0) scale(1.1)'})),
	    transition('inactive => active', animate('100ms ease-in')),
	    transition('active => inactive', animate('100ms ease-out')),
	    transition('void => inactive', [
	      style({transform: 'translateX(150%) scale(1)'}),
	      animate(100)
	    ]),
	    transition('inactive => void', [
	      animate(100, style({transform: 'translateX(100%) scale(1)'}))
	    ]),
	    transition('void => active', [
	      style({transform: 'translateX(0) scale(0)'}),
	      animate(200)
	    ]),
	    transition('active => void', [
	      animate(200, style({transform: 'translateX(0) scale(0)'}))
	    ])
	  ]),
	  trigger('shrinkOut', [
	    state('active', style({height: '300px'})),
	    transition('inactive => active', animate('100ms ease-in')),
	    transition('active => inactive', animate('100ms ease-out'))
	    
	  ])	  
	]


})

export class AnimateComponent {

	heroes : Hero[] = [];

	test: string[] = ['heroOne', 'heroTwo', 'heroThree', 'heroFour', 'heroFive'];

	constructor(){
		for(var i = 0 ; i < this.test.length; i++){
			this.heroes.push(new Hero(this.test[i] ));
		}
		console.log(this.heroes);
	}



	
}