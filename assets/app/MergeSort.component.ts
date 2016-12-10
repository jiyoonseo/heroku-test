import { Component } from '@angular/core';
import { FunctionService } from './functions.service';

@Component({
	selector: 'my-merge-sort',
	template: `
	<div>
		<ul class="nav nav-pills">
			<li  class="nav-item">
				<a routerLink="/animate" class="nav-link" routerLinkActive="active" >animate</a>
			</li>
		</ul>	
	</div>
	
	<div class="jumbotron">

		<h2 class="text-xs-center">Sort Examples</h2>
		<div class="row text-xs-center">
			<span *ngFor="let mnb of myNumBtns" >
				<button class="btn btn-secondary" (click)="addThisNum(mnb)" >{{ mnb }}</button>
			</span>
			<br><br>
			<button class="btn btn-secondary" (click)="randomGen()">Random Gen</button>
			<button class="btn btn-secondary" (click)="clearMyNums()">Clear</button>	
		</div>

		<hr>
		<div class="text-xs-center">
			<b>Sort this numbers: </b> 
			<span class="resultText"> 
				<span *ngFor="let eachMN of myNumbers">
					<button class="btn btn-secondary disabled" >{{ eachMN }}</button>	
				</span>
			</span>

			<div>
				Length = {{myNumbers.length}} 
				<i style="color: red;" > {{ myNumbers?.length == 15 ? 'Max' : '' }} </i>
			</div>
		</div>	

		<hr>
		<div class="row text-xs-center" >
			<button class="btn btn-danger" (click)="doMergeSort()">MergeSort</button>		
			<button class="btn btn-warning" (click)="doBubbleSort()">BubbleSort</button>		
			<button class="btn btn-success" (click)="doQuickSort()">QuickSort</button>		
		</div>
	</div>

	<!-- TEST AREA  : START-->
		<animation-test > </animation-test>
	<!-- TEST AREA  : END-->


	<!-- RESULT AREA -->
	<div>
		<bubble-sort *ngIf="myNumbers" [myNumbers]="myNumbers"></bubble-sort>



		<div class="row text-xs-center bg-danger" *ngIf="sortedMerge" >
			Merge Sort Result: 
			<span *ngFor="let eachSM of sortedMerge" >
				<button class="btn btn-secondary disabled" >{{ eachSM }}</button>	
			</span>
			
		</div>
		<div class="row text-xs-center bg-warning" *ngIf="sortedBubble" >
			Bubble Sort Result: 
			<span *ngFor="let eachSB of sortedBubble" >
				<button class="btn btn-secondary disabled" >{{ eachSB }}</button>	
			</span>
		</div>
		<div class="row text-xs-center bg-success" *ngIf="sortedQuick" >
			Quick Sort Result: 
			{{sortedQuick}}
			<span *ngFor="let eachSQ of sortedQuick" >
				<button class="btn btn-secondary disabled" >{{ eachSQ }}</button>	
			</span>
		</div>
	</div>

	`,	
	styles: [`
	.resultText{
		color: #546E7A;
		weight: 800;
	}
	.highlight{
		background-color: #D4E157;
	}
	`]
})

export class MergeSortComponent{

	myNumbers : number[] = [];
	myNumBtns : number[] = [];

	sortedMerge: number[] = null;
	sortedBubble: number[] = null;
	sortedQuick: number[] = null;

	constructor(private _funcService: FunctionService){
		for(var i = 1 ; i < 16 ; i++){
			this.myNumBtns.push(i);
		}
	}
	
	addThisNum(num: number){
		if(this.myNumbers.length == 15){
			return;
		}
		this.myNumbers.push(num);
	}

	randomGen(){
		if(this.myNumbers && this.myNumbers.length ==15){
			return;
		}
		for( var i = this.myNumbers.length ; i < 15 ; i++){
			var min = Math.ceil(1);
			var max = Math.floor(15);
			this.myNumbers.push(Math.floor(Math.random() * (max - min)) + min) ;
		}

		// let's make it available the random numbers in the service so we all can access
		this._funcService.receiveRandomNums(this.myNumbers);
	}

	clearMyNums(){
		this.myNumbers = [];
		this.sortedMerge = null ;
		this.sortedBubble = null;
		this.sortedQuick = null;
	}

	doMergeSort(){
		console.log("MergeSort start");
		this.myNumbers =  this._funcService.mergeSort(this.myNumbers);

	}

	doBubbleSort(){
		console.log("BubbleSort start");
		this.sortedBubble =  this._funcService.bubbleSort(this.myNumbers);		
		console.log(this.sortedBubble);
	}

	doQuickSort(){
		console.log("QuickSort Start");
		this.myNumbers =  this._funcService.quickSort(this.myNumbers);
	}
}