import { Injectable, EventEmitter } from '@angular/core';
import { SortElement } from './sort.element';

@Injectable()
export class FunctionService{

	rawRandomNums : SortElement[] = [];

	rtnArryQuickSort : number[] = []; // copy array #1
	rtnArryBubbleSort : number[] = []; // copy array #2
	rtnArryMergeSort : number[] = []; // copy array #3


	receiveRandomNums(nums : number[]){
		if(!nums){return;}
		for(var i =  0; i < nums.length; i++){
			this.rawRandomNums.push(new SortElement(nums[i], 'void'));
		}
	}

	getRandomNums(){
		// if(!this.rawRandomNums){return;}
		return this.rawRandomNums;
	}



	quickSort(inputArry : number[]) : number[] {

		return this.rtnArryQuickSort;
	}

	bubbleSort(inputArry: number[]) : number[]{
		// console.log(inputArry);
		if(inputArry && inputArry.length > 0){
			this.copyArray(inputArry, 2);
			for(var i = 0; i < this.rtnArryBubbleSort.length -1; i++){
				for(var j = i+1 ; j<this.rtnArryBubbleSort.length; j++){
					if(this.rtnArryBubbleSort[i]>this.rtnArryBubbleSort[j]){ // swap condition
						var swap = this.rtnArryBubbleSort[i];
						this.rtnArryBubbleSort[i] = this.rtnArryBubbleSort[j];
						this.rtnArryBubbleSort[j] = swap;
					}
				}							
			}			
		}
		// console.log(inputArry);
		return this.rtnArryBubbleSort;
	}

	bubbleSortService(inputArry: number[]) : number[]{
		if(inputArry && inputArry.length > 0){
			this.copyArray(inputArry, 2);
			for(var i = 0; i < this.rtnArryBubbleSort.length -1; i++){
				for(var j = i+1 ; j<this.rtnArryBubbleSort.length; j++){
					if(this.rtnArryBubbleSort[i]>this.rtnArryBubbleSort[j]){ // swap condition
						var swap = this.rtnArryBubbleSort[i];
						this.rtnArryBubbleSort[i] = this.rtnArryBubbleSort[j];
						this.rtnArryBubbleSort[j] = swap;
					}
				}							
			}			
		}

		return this.rtnArryBubbleSort;
	}

	mergeSort(inputArry: number[]) : number[]{
		return this.rtnArryMergeSort;
	}

	copyArray(inputArry: number[] , copyToArry: number){
		if(copyToArry == 1){ //quickSort
			this.rtnArryQuickSort = [];
			for(var i = 0 ; i < inputArry.length ; i++){
				this.rtnArryQuickSort.push(inputArry[i])
			}
		}else if(copyToArry == 2){ // bubbleSort
			this.rtnArryBubbleSort = [];
			for(var i = 0 ; i < inputArry.length ; i++){
				this.rtnArryBubbleSort.push(inputArry[i])
			}
		}else{ // mergeSort
			this.rtnArryMergeSort = [];
			for(var i = 0 ; i < inputArry.length ; i++){
				this.rtnArryMergeSort.push(inputArry[i])
			}
		}
	}

	
}