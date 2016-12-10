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
let BubbleSortComponent = class BubbleSortComponent {
    constructor() {
        this.myNumbers = null;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], BubbleSortComponent.prototype, "myNumbers", void 0);
BubbleSortComponent = __decorate([
    core_1.Component({
        selector: "bubble-sort",
        template: `
		<div class="bg-warning">
			HERE IS FOR BUBBLE SORT AREA...
			{{myNumbers}}
		</div>
	`,
        styles: [`
	
	`]
    }), 
    __metadata('design:paramtypes', [])
], BubbleSortComponent);
exports.BubbleSortComponent = BubbleSortComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1YmJsZVNvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBaUMsZUFBZSxDQUFDLENBQUE7QUFnQmpEO0lBR0M7UUFGUyxjQUFTLEdBQWEsSUFBSSxDQUFDO0lBSXBDLENBQUM7QUFDRixDQUFDO0FBTEE7SUFBQyxZQUFLLEVBQUU7O3NEQUFBO0FBZFQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7OztFQUtUO1FBQ0QsTUFBTSxFQUFFLENBQUM7O0VBRVIsQ0FBQztLQUNGLENBQUM7O3VCQUFBO0FBRVcsMkJBQW1CLHNCQU0vQixDQUFBIiwiZmlsZSI6IkJ1YmJsZVNvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVuY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9mdW5jdGlvbnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJidWJibGUtc29ydFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJiZy13YXJuaW5nXCI+XG5cdFx0XHRIRVJFIElTIEZPUiBCVUJCTEUgU09SVCBBUkVBLi4uXG5cdFx0XHR7e215TnVtYmVyc319XG5cdFx0PC9kaXY+XG5cdGAsXG5cdHN0eWxlczogW2Bcblx0XG5cdGBdXG59KVxuXG5leHBvcnQgY2xhc3MgQnViYmxlU29ydENvbXBvbmVudHtcblx0QElucHV0KCkgbXlOdW1iZXJzOiBudW1iZXJbXSA9IG51bGw7XHRcblxuXHRjb25zdHJ1Y3Rvcigpe1xuXG5cdH1cbn0iXX0=
