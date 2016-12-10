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
const core_1 = require('@angular/core');
const functions_service_1 = require('./functions.service');
let MergeSortComponent = class MergeSortComponent {
    constructor(_funcService) {
        this._funcService = _funcService;
        this.myNumbers = [];
        this.myNumBtns = [];
        this.sortedMerge = null;
        this.sortedBubble = null;
        this.sortedQuick = null;
        for (var i = 1; i < 16; i++) {
            this.myNumBtns.push(i);
        }
    }
    addThisNum(num) {
        if (this.myNumbers.length == 15) {
            return;
        }
        this.myNumbers.push(num);
    }
    randomGen() {
        if (this.myNumbers && this.myNumbers.length == 15) {
            return;
        }
        for (var i = this.myNumbers.length; i < 15; i++) {
            var min = Math.ceil(1);
            var max = Math.floor(15);
            this.myNumbers.push(Math.floor(Math.random() * (max - min)) + min);
        }
        // let's make it available the random numbers in the service so we all can access
        this._funcService.receiveRandomNums(this.myNumbers);
    }
    clearMyNums() {
        this.myNumbers = [];
        this.sortedMerge = null;
        this.sortedBubble = null;
        this.sortedQuick = null;
    }
    doMergeSort() {
        console.log("MergeSort start");
        this.myNumbers = this._funcService.mergeSort(this.myNumbers);
    }
    doBubbleSort() {
        console.log("BubbleSort start");
        this.sortedBubble = this._funcService.bubbleSort(this.myNumbers);
        console.log(this.sortedBubble);
    }
    doQuickSort() {
        console.log("QuickSort Start");
        this.myNumbers = this._funcService.quickSort(this.myNumbers);
    }
};
MergeSortComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [functions_service_1.FunctionService])
], MergeSortComponent);
exports.MergeSortComponent = MergeSortComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1lcmdlU29ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxvQ0FBZ0MscUJBQXFCLENBQUMsQ0FBQTtBQTZGdEQ7SUFTQyxZQUFvQixZQUE2QjtRQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFQakQsY0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzdCLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzVCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFHLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQztJQUNGLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNyQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQy9CLE1BQU0sQ0FBQztRQUNSLENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUztRQUNSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNoRCxNQUFNLENBQUM7UUFDUixDQUFDO1FBQ0QsR0FBRyxDQUFBLENBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ2xELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFFO1FBQ3JFLENBQUM7UUFFRCxpRkFBaUY7UUFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBRTtRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUvRCxDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0FBQ0YsQ0FBQztBQXRKRDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNkVUO1FBQ0QsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O0VBUVIsQ0FBQztLQUNGLENBQUM7O3NCQUFBO0FBRVcsMEJBQWtCLHFCQTJEOUIsQ0FBQSIsImZpbGUiOiJNZXJnZVNvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdW5jdGlvblNlcnZpY2UgfSBmcm9tICcuL2Z1bmN0aW9ucy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktbWVyZ2Utc29ydCcsXG5cdHRlbXBsYXRlOiBgXG5cdDxkaXY+XG5cdFx0PHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxuXHRcdFx0PGxpICBjbGFzcz1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdDxhIHJvdXRlckxpbms9XCIvYW5pbWF0ZVwiIGNsYXNzPVwibmF2LWxpbmtcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgPmFuaW1hdGU8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdDwvdWw+XHRcblx0PC9kaXY+XG5cdFxuXHQ8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG5cblx0XHQ8aDIgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlNvcnQgRXhhbXBsZXM8L2gyPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgdGV4dC14cy1jZW50ZXJcIj5cblx0XHRcdDxzcGFuICpuZ0Zvcj1cImxldCBtbmIgb2YgbXlOdW1CdG5zXCIgPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiYWRkVGhpc051bShtbmIpXCIgPnt7IG1uYiB9fTwvYnV0dG9uPlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PGJyPjxicj5cblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJyYW5kb21HZW4oKVwiPlJhbmRvbSBHZW48L2J1dHRvbj5cblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjbGVhck15TnVtcygpXCI+Q2xlYXI8L2J1dHRvbj5cdFxuXHRcdDwvZGl2PlxuXG5cdFx0PGhyPlxuXHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxuXHRcdFx0PGI+U29ydCB0aGlzIG51bWJlcnM6IDwvYj4gXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInJlc3VsdFRleHRcIj4gXG5cdFx0XHRcdDxzcGFuICpuZ0Zvcj1cImxldCBlYWNoTU4gb2YgbXlOdW1iZXJzXCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRpc2FibGVkXCIgPnt7IGVhY2hNTiB9fTwvYnV0dG9uPlx0XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0PGRpdj5cblx0XHRcdFx0TGVuZ3RoID0ge3tteU51bWJlcnMubGVuZ3RofX0gXG5cdFx0XHRcdDxpIHN0eWxlPVwiY29sb3I6IHJlZDtcIiA+IHt7IG15TnVtYmVycz8ubGVuZ3RoID09IDE1ID8gJ01heCcgOiAnJyB9fSA8L2k+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cdFxuXG5cdFx0PGhyPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgdGV4dC14cy1jZW50ZXJcIiA+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwiZG9NZXJnZVNvcnQoKVwiPk1lcmdlU29ydDwvYnV0dG9uPlx0XHRcblx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiAoY2xpY2spPVwiZG9CdWJibGVTb3J0KClcIj5CdWJibGVTb3J0PC9idXR0b24+XHRcdFxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJkb1F1aWNrU29ydCgpXCI+UXVpY2tTb3J0PC9idXR0b24+XHRcdFxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8IS0tIFRFU1QgQVJFQSAgOiBTVEFSVC0tPlxuXHRcdDxhbmltYXRpb24tdGVzdCA+IDwvYW5pbWF0aW9uLXRlc3Q+XG5cdDwhLS0gVEVTVCBBUkVBICA6IEVORC0tPlxuXG5cblx0PCEtLSBSRVNVTFQgQVJFQSAtLT5cblx0PGRpdj5cblx0XHQ8YnViYmxlLXNvcnQgKm5nSWY9XCJteU51bWJlcnNcIiBbbXlOdW1iZXJzXT1cIm15TnVtYmVyc1wiPjwvYnViYmxlLXNvcnQ+XG5cblxuXG5cdFx0PGRpdiBjbGFzcz1cInJvdyB0ZXh0LXhzLWNlbnRlciBiZy1kYW5nZXJcIiAqbmdJZj1cInNvcnRlZE1lcmdlXCIgPlxuXHRcdFx0TWVyZ2UgU29ydCBSZXN1bHQ6IFxuXHRcdFx0PHNwYW4gKm5nRm9yPVwibGV0IGVhY2hTTSBvZiBzb3J0ZWRNZXJnZVwiID5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRpc2FibGVkXCIgPnt7IGVhY2hTTSB9fTwvYnV0dG9uPlx0XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHRcblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93IHRleHQteHMtY2VudGVyIGJnLXdhcm5pbmdcIiAqbmdJZj1cInNvcnRlZEJ1YmJsZVwiID5cblx0XHRcdEJ1YmJsZSBTb3J0IFJlc3VsdDogXG5cdFx0XHQ8c3BhbiAqbmdGb3I9XCJsZXQgZWFjaFNCIG9mIHNvcnRlZEJ1YmJsZVwiID5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRpc2FibGVkXCIgPnt7IGVhY2hTQiB9fTwvYnV0dG9uPlx0XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cInJvdyB0ZXh0LXhzLWNlbnRlciBiZy1zdWNjZXNzXCIgKm5nSWY9XCJzb3J0ZWRRdWlja1wiID5cblx0XHRcdFF1aWNrIFNvcnQgUmVzdWx0OiBcblx0XHRcdHt7c29ydGVkUXVpY2t9fVxuXHRcdFx0PHNwYW4gKm5nRm9yPVwibGV0IGVhY2hTUSBvZiBzb3J0ZWRRdWlja1wiID5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRpc2FibGVkXCIgPnt7IGVhY2hTUSB9fTwvYnV0dG9uPlx0XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdGAsXHRcblx0c3R5bGVzOiBbYFxuXHQucmVzdWx0VGV4dHtcblx0XHRjb2xvcjogIzU0NkU3QTtcblx0XHR3ZWlnaHQ6IDgwMDtcblx0fVxuXHQuaGlnaGxpZ2h0e1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNENEUxNTc7XG5cdH1cblx0YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXJnZVNvcnRDb21wb25lbnR7XG5cblx0bXlOdW1iZXJzIDogbnVtYmVyW10gPSBbXTtcblx0bXlOdW1CdG5zIDogbnVtYmVyW10gPSBbXTtcblxuXHRzb3J0ZWRNZXJnZTogbnVtYmVyW10gPSBudWxsO1xuXHRzb3J0ZWRCdWJibGU6IG51bWJlcltdID0gbnVsbDtcblx0c29ydGVkUXVpY2s6IG51bWJlcltdID0gbnVsbDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mdW5jU2VydmljZTogRnVuY3Rpb25TZXJ2aWNlKXtcblx0XHRmb3IodmFyIGkgPSAxIDsgaSA8IDE2IDsgaSsrKXtcblx0XHRcdHRoaXMubXlOdW1CdG5zLnB1c2goaSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRhZGRUaGlzTnVtKG51bTogbnVtYmVyKXtcblx0XHRpZih0aGlzLm15TnVtYmVycy5sZW5ndGggPT0gMTUpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLm15TnVtYmVycy5wdXNoKG51bSk7XG5cdH1cblxuXHRyYW5kb21HZW4oKXtcblx0XHRpZih0aGlzLm15TnVtYmVycyAmJiB0aGlzLm15TnVtYmVycy5sZW5ndGggPT0xNSl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciggdmFyIGkgPSB0aGlzLm15TnVtYmVycy5sZW5ndGggOyBpIDwgMTUgOyBpKyspe1xuXHRcdFx0dmFyIG1pbiA9IE1hdGguY2VpbCgxKTtcblx0XHRcdHZhciBtYXggPSBNYXRoLmZsb29yKDE1KTtcblx0XHRcdHRoaXMubXlOdW1iZXJzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluKSA7XG5cdFx0fVxuXG5cdFx0Ly8gbGV0J3MgbWFrZSBpdCBhdmFpbGFibGUgdGhlIHJhbmRvbSBudW1iZXJzIGluIHRoZSBzZXJ2aWNlIHNvIHdlIGFsbCBjYW4gYWNjZXNzXG5cdFx0dGhpcy5fZnVuY1NlcnZpY2UucmVjZWl2ZVJhbmRvbU51bXModGhpcy5teU51bWJlcnMpO1xuXHR9XG5cblx0Y2xlYXJNeU51bXMoKXtcblx0XHR0aGlzLm15TnVtYmVycyA9IFtdO1xuXHRcdHRoaXMuc29ydGVkTWVyZ2UgPSBudWxsIDtcblx0XHR0aGlzLnNvcnRlZEJ1YmJsZSA9IG51bGw7XG5cdFx0dGhpcy5zb3J0ZWRRdWljayA9IG51bGw7XG5cdH1cblxuXHRkb01lcmdlU29ydCgpe1xuXHRcdGNvbnNvbGUubG9nKFwiTWVyZ2VTb3J0IHN0YXJ0XCIpO1xuXHRcdHRoaXMubXlOdW1iZXJzID0gIHRoaXMuX2Z1bmNTZXJ2aWNlLm1lcmdlU29ydCh0aGlzLm15TnVtYmVycyk7XG5cblx0fVxuXG5cdGRvQnViYmxlU29ydCgpe1xuXHRcdGNvbnNvbGUubG9nKFwiQnViYmxlU29ydCBzdGFydFwiKTtcblx0XHR0aGlzLnNvcnRlZEJ1YmJsZSA9ICB0aGlzLl9mdW5jU2VydmljZS5idWJibGVTb3J0KHRoaXMubXlOdW1iZXJzKTtcdFx0XG5cdFx0Y29uc29sZS5sb2codGhpcy5zb3J0ZWRCdWJibGUpO1xuXHR9XG5cblx0ZG9RdWlja1NvcnQoKXtcblx0XHRjb25zb2xlLmxvZyhcIlF1aWNrU29ydCBTdGFydFwiKTtcblx0XHR0aGlzLm15TnVtYmVycyA9ICB0aGlzLl9mdW5jU2VydmljZS5xdWlja1NvcnQodGhpcy5teU51bWJlcnMpO1xuXHR9XG59Il19
