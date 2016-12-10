import { Component, Input } from '@angular/core';
import { FunctionService } from './functions.service';

@Component({
	selector: "quick-sort",
	template: `
		<div class="bg-success">
			HERE IS FOR Quick SORT AREA...
			{{myNumbers}}
		</div>
	`,
	styles: [`
	
	`]
})

export class QuickSortComponent{
	@Input() myNumbers: number[] = null;	

	constructor(){

	}
}