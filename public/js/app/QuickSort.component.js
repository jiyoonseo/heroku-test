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
let QuickSortComponent = class QuickSortComponent {
    constructor() {
        this.myNumbers = null;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], QuickSortComponent.prototype, "myNumbers", void 0);
QuickSortComponent = __decorate([
    core_1.Component({
        selector: "quick-sort",
        template: `
		<div class="bg-success">
			HERE IS FOR Quick SORT AREA...
			{{myNumbers}}
		</div>
	`,
        styles: [`
	
	`]
    }), 
    __metadata('design:paramtypes', [])
], QuickSortComponent);
exports.QuickSortComponent = QuickSortComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlF1aWNrU29ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQWdCakQ7SUFHQztRQUZTLGNBQVMsR0FBYSxJQUFJLENBQUM7SUFJcEMsQ0FBQztBQUNGLENBQUM7QUFMQTtJQUFDLFlBQUssRUFBRTs7cURBQUE7QUFkVDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7O0VBS1Q7UUFDRCxNQUFNLEVBQUUsQ0FBQzs7RUFFUixDQUFDO0tBQ0YsQ0FBQzs7c0JBQUE7QUFFVywwQkFBa0IscUJBTTlCLENBQUEiLCJmaWxlIjoiUXVpY2tTb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZ1bmN0aW9uU2VydmljZSB9IGZyb20gJy4vZnVuY3Rpb25zLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwicXVpY2stc29ydFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJiZy1zdWNjZXNzXCI+XG5cdFx0XHRIRVJFIElTIEZPUiBRdWljayBTT1JUIEFSRUEuLi5cblx0XHRcdHt7bXlOdW1iZXJzfX1cblx0XHQ8L2Rpdj5cblx0YCxcblx0c3R5bGVzOiBbYFxuXHRcblx0YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBRdWlja1NvcnRDb21wb25lbnR7XG5cdEBJbnB1dCgpIG15TnVtYmVyczogbnVtYmVyW10gPSBudWxsO1x0XG5cblx0Y29uc3RydWN0b3IoKXtcblxuXHR9XG59Il19
