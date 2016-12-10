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
const sort_element_1 = require('./sort.element');
let FunctionService = class FunctionService {
    constructor() {
        this.rawRandomNums = [];
        this.rtnArryQuickSort = []; // copy array #1
        this.rtnArryBubbleSort = []; // copy array #2
        this.rtnArryMergeSort = []; // copy array #3
    }
    receiveRandomNums(nums) {
        if (!nums) {
            return;
        }
        for (var i = 0; i < nums.length; i++) {
            this.rawRandomNums.push(new sort_element_1.SortElement(nums[i], 'void'));
        }
    }
    getRandomNums() {
        // if(!this.rawRandomNums){return;}
        return this.rawRandomNums;
    }
    quickSort(inputArry) {
        return this.rtnArryQuickSort;
    }
    bubbleSort(inputArry) {
        // console.log(inputArry);
        if (inputArry && inputArry.length > 0) {
            this.copyArray(inputArry, 2);
            for (var i = 0; i < this.rtnArryBubbleSort.length - 1; i++) {
                for (var j = i + 1; j < this.rtnArryBubbleSort.length; j++) {
                    if (this.rtnArryBubbleSort[i] > this.rtnArryBubbleSort[j]) {
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
    bubbleSortService(inputArry) {
        if (inputArry && inputArry.length > 0) {
            this.copyArray(inputArry, 2);
            for (var i = 0; i < this.rtnArryBubbleSort.length - 1; i++) {
                for (var j = i + 1; j < this.rtnArryBubbleSort.length; j++) {
                    if (this.rtnArryBubbleSort[i] > this.rtnArryBubbleSort[j]) {
                        var swap = this.rtnArryBubbleSort[i];
                        this.rtnArryBubbleSort[i] = this.rtnArryBubbleSort[j];
                        this.rtnArryBubbleSort[j] = swap;
                    }
                }
            }
        }
        return this.rtnArryBubbleSort;
    }
    mergeSort(inputArry) {
        return this.rtnArryMergeSort;
    }
    copyArray(inputArry, copyToArry) {
        if (copyToArry == 1) {
            this.rtnArryQuickSort = [];
            for (var i = 0; i < inputArry.length; i++) {
                this.rtnArryQuickSort.push(inputArry[i]);
            }
        }
        else if (copyToArry == 2) {
            this.rtnArryBubbleSort = [];
            for (var i = 0; i < inputArry.length; i++) {
                this.rtnArryBubbleSort.push(inputArry[i]);
            }
        }
        else {
            this.rtnArryMergeSort = [];
            for (var i = 0; i < inputArry.length; i++) {
                this.rtnArryMergeSort.push(inputArry[i]);
            }
        }
    }
};
FunctionService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], FunctionService);
exports.FunctionService = FunctionService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QztRQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzFDLENBQUM7UUFDRixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3pDLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztBQUdGLENBQUM7QUF4RkQ7SUFBQyxpQkFBVSxFQUFFOzttQkFBQTtBQUNBLHVCQUFlLGtCQXVGM0IsQ0FBQSIsImZpbGUiOiJmdW5jdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29ydEVsZW1lbnQgfSBmcm9tICcuL3NvcnQuZWxlbWVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGdW5jdGlvblNlcnZpY2V7XG5cblx0cmF3UmFuZG9tTnVtcyA6IFNvcnRFbGVtZW50W10gPSBbXTtcblxuXHRydG5BcnJ5UXVpY2tTb3J0IDogbnVtYmVyW10gPSBbXTsgLy8gY29weSBhcnJheSAjMVxuXHRydG5BcnJ5QnViYmxlU29ydCA6IG51bWJlcltdID0gW107IC8vIGNvcHkgYXJyYXkgIzJcblx0cnRuQXJyeU1lcmdlU29ydCA6IG51bWJlcltdID0gW107IC8vIGNvcHkgYXJyYXkgIzNcblxuXG5cdHJlY2VpdmVSYW5kb21OdW1zKG51bXMgOiBudW1iZXJbXSl7XG5cdFx0aWYoIW51bXMpe3JldHVybjt9XG5cdFx0Zm9yKHZhciBpID0gIDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKXtcblx0XHRcdHRoaXMucmF3UmFuZG9tTnVtcy5wdXNoKG5ldyBTb3J0RWxlbWVudChudW1zW2ldLCAndm9pZCcpKTtcblx0XHR9XG5cdH1cblxuXHRnZXRSYW5kb21OdW1zKCl7XG5cdFx0Ly8gaWYoIXRoaXMucmF3UmFuZG9tTnVtcyl7cmV0dXJuO31cblx0XHRyZXR1cm4gdGhpcy5yYXdSYW5kb21OdW1zO1xuXHR9XG5cblxuXG5cdHF1aWNrU29ydChpbnB1dEFycnkgOiBudW1iZXJbXSkgOiBudW1iZXJbXSB7XG5cblx0XHRyZXR1cm4gdGhpcy5ydG5BcnJ5UXVpY2tTb3J0O1xuXHR9XG5cblx0YnViYmxlU29ydChpbnB1dEFycnk6IG51bWJlcltdKSA6IG51bWJlcltde1xuXHRcdC8vIGNvbnNvbGUubG9nKGlucHV0QXJyeSk7XG5cdFx0aWYoaW5wdXRBcnJ5ICYmIGlucHV0QXJyeS5sZW5ndGggPiAwKXtcblx0XHRcdHRoaXMuY29weUFycmF5KGlucHV0QXJyeSwgMik7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5ydG5BcnJ5QnViYmxlU29ydC5sZW5ndGggLTE7IGkrKyl7XG5cdFx0XHRcdGZvcih2YXIgaiA9IGkrMSA7IGo8dGhpcy5ydG5BcnJ5QnViYmxlU29ydC5sZW5ndGg7IGorKyl7XG5cdFx0XHRcdFx0aWYodGhpcy5ydG5BcnJ5QnViYmxlU29ydFtpXT50aGlzLnJ0bkFycnlCdWJibGVTb3J0W2pdKXsgLy8gc3dhcCBjb25kaXRpb25cblx0XHRcdFx0XHRcdHZhciBzd2FwID0gdGhpcy5ydG5BcnJ5QnViYmxlU29ydFtpXTtcblx0XHRcdFx0XHRcdHRoaXMucnRuQXJyeUJ1YmJsZVNvcnRbaV0gPSB0aGlzLnJ0bkFycnlCdWJibGVTb3J0W2pdO1xuXHRcdFx0XHRcdFx0dGhpcy5ydG5BcnJ5QnViYmxlU29ydFtqXSA9IHN3YXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcblx0XHRcdH1cdFx0XHRcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coaW5wdXRBcnJ5KTtcblx0XHRyZXR1cm4gdGhpcy5ydG5BcnJ5QnViYmxlU29ydDtcblx0fVxuXG5cdGJ1YmJsZVNvcnRTZXJ2aWNlKGlucHV0QXJyeTogbnVtYmVyW10pIDogbnVtYmVyW117XG5cdFx0aWYoaW5wdXRBcnJ5ICYmIGlucHV0QXJyeS5sZW5ndGggPiAwKXtcblx0XHRcdHRoaXMuY29weUFycmF5KGlucHV0QXJyeSwgMik7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5ydG5BcnJ5QnViYmxlU29ydC5sZW5ndGggLTE7IGkrKyl7XG5cdFx0XHRcdGZvcih2YXIgaiA9IGkrMSA7IGo8dGhpcy5ydG5BcnJ5QnViYmxlU29ydC5sZW5ndGg7IGorKyl7XG5cdFx0XHRcdFx0aWYodGhpcy5ydG5BcnJ5QnViYmxlU29ydFtpXT50aGlzLnJ0bkFycnlCdWJibGVTb3J0W2pdKXsgLy8gc3dhcCBjb25kaXRpb25cblx0XHRcdFx0XHRcdHZhciBzd2FwID0gdGhpcy5ydG5BcnJ5QnViYmxlU29ydFtpXTtcblx0XHRcdFx0XHRcdHRoaXMucnRuQXJyeUJ1YmJsZVNvcnRbaV0gPSB0aGlzLnJ0bkFycnlCdWJibGVTb3J0W2pdO1xuXHRcdFx0XHRcdFx0dGhpcy5ydG5BcnJ5QnViYmxlU29ydFtqXSA9IHN3YXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcblx0XHRcdH1cdFx0XHRcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5ydG5BcnJ5QnViYmxlU29ydDtcblx0fVxuXG5cdG1lcmdlU29ydChpbnB1dEFycnk6IG51bWJlcltdKSA6IG51bWJlcltde1xuXHRcdHJldHVybiB0aGlzLnJ0bkFycnlNZXJnZVNvcnQ7XG5cdH1cblxuXHRjb3B5QXJyYXkoaW5wdXRBcnJ5OiBudW1iZXJbXSAsIGNvcHlUb0Fycnk6IG51bWJlcil7XG5cdFx0aWYoY29weVRvQXJyeSA9PSAxKXsgLy9xdWlja1NvcnRcblx0XHRcdHRoaXMucnRuQXJyeVF1aWNrU29ydCA9IFtdO1xuXHRcdFx0Zm9yKHZhciBpID0gMCA7IGkgPCBpbnB1dEFycnkubGVuZ3RoIDsgaSsrKXtcblx0XHRcdFx0dGhpcy5ydG5BcnJ5UXVpY2tTb3J0LnB1c2goaW5wdXRBcnJ5W2ldKVxuXHRcdFx0fVxuXHRcdH1lbHNlIGlmKGNvcHlUb0FycnkgPT0gMil7IC8vIGJ1YmJsZVNvcnRcblx0XHRcdHRoaXMucnRuQXJyeUJ1YmJsZVNvcnQgPSBbXTtcblx0XHRcdGZvcih2YXIgaSA9IDAgOyBpIDwgaW5wdXRBcnJ5Lmxlbmd0aCA7IGkrKyl7XG5cdFx0XHRcdHRoaXMucnRuQXJyeUJ1YmJsZVNvcnQucHVzaChpbnB1dEFycnlbaV0pXG5cdFx0XHR9XG5cdFx0fWVsc2V7IC8vIG1lcmdlU29ydFxuXHRcdFx0dGhpcy5ydG5BcnJ5TWVyZ2VTb3J0ID0gW107XG5cdFx0XHRmb3IodmFyIGkgPSAwIDsgaSA8IGlucHV0QXJyeS5sZW5ndGggOyBpKyspe1xuXHRcdFx0XHR0aGlzLnJ0bkFycnlNZXJnZVNvcnQucHVzaChpbnB1dEFycnlbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0XG59Il19
