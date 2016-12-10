import { Component, Input } from '@angular/core';
import { FunctionService } from './functions.service';

@Component({
	selector: "bubble-sort",
	template: `
		<div class="bg-warning">
			HERE IS FOR BUBBLE SORT AREA...
			{{myNumbers}}
		</div>
	`,
	styles: [`
	
	`]
})

export class BubbleSortComponent{
	@Input() myNumbers: number[] = null;	

	constructor(){

	}
}