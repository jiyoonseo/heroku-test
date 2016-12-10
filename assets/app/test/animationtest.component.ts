import { Component, Input, OnInit,
			trigger,
			state,
			style,
			transition,
			animate
   } from '@angular/core';
import { SortElement } from '../sort.element';
import { FunctionService } from '../functions.service';

@Component({
	selector: 'animation-test',
	template: `
	

	<div class="jumbotron">
		<div class="row">
			<div class="bg-primary text-white text-xs-center">
				This is a test for Angular Animation Effect for UI
				
				<div class = "text-xs-center" *ngIf="rawRandomNums">
					<span *ngFor= "let eachR of rawRandomNums;  let ind = index" >
						<button class="btn btn-secondary" (click)="onToggle(ind)" [@heroState]="rawRandomNums[ind]">{{ eachR.num }}</button>	
					</span>
				</div>
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
	      style({transform: 'translateX(-100%) scale(1)'}),
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
	  ])
	]


})

export class AnimationTestComponet implements OnInit{
	// @Input() inputNums: number[] = null;
	animateState : string[] = null;

	rawRandomNums : SortElement[] = [];


	constructor(private _functionService: FunctionService){
		
	}

	ngOnInit(){
		this.rawRandomNums = this._functionService.getRandomNums();
		console.log(this.rawRandomNums);

	}

	onToggle(index: number){
		
		if(!this.rawRandomNums[index] || this.rawRandomNums[index].state == 'inactive'){
			console.log("Change to act now..");
			this.rawRandomNums[index].state = 'active';
		}else{
			console.log("Change to INACTIVE now..");
			this.rawRandomNums[index].state = 'inactive';
		}
	}

	
}