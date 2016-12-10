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
const functions_service_1 = require('../functions.service');
let AnimationTestComponet = class AnimationTestComponet {
    constructor(_functionService) {
        this._functionService = _functionService;
        // @Input() inputNums: number[] = null;
        this.animateState = null;
        this.rawRandomNums = [];
    }
    ngOnInit() {
        this.rawRandomNums = this._functionService.getRandomNums();
        console.log(this.rawRandomNums);
    }
    onToggle(index) {
        if (!this.rawRandomNums[index] || this.rawRandomNums[index].state == 'inactive') {
            console.log("Change to act now..");
            this.rawRandomNums[index].state = 'active';
        }
        else {
            console.log("Change to INACTIVE now..");
            this.rawRandomNums[index].state = 'inactive';
        }
    }
};
AnimationTestComponet = __decorate([
    core_1.Component({
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
            core_1.trigger('heroState', [
                core_1.state('inactive', core_1.style({ transform: 'translateX(0) scale(1)' })),
                core_1.state('active', core_1.style({ transform: 'translateX(0) scale(1.1)' })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out')),
                core_1.transition('void => inactive', [
                    core_1.style({ transform: 'translateX(-100%) scale(1)' }),
                    core_1.animate(100)
                ]),
                core_1.transition('inactive => void', [
                    core_1.animate(100, core_1.style({ transform: 'translateX(100%) scale(1)' }))
                ]),
                core_1.transition('void => active', [
                    core_1.style({ transform: 'translateX(0) scale(0)' }),
                    core_1.animate(200)
                ]),
                core_1.transition('active => void', [
                    core_1.animate(200, core_1.style({ transform: 'translateX(0) scale(0)' }))
                ])
            ])
        ]
    }), 
    __metadata('design:paramtypes', [functions_service_1.FunctionService])
], AnimationTestComponet);
exports.AnimationTestComponet = AnimationTestComponet;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYW5pbWF0aW9udGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQU1VLGVBQWUsQ0FBQyxDQUFBO0FBRTFCLG9DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBb0R2RDtJQU9DLFlBQW9CLGdCQUFpQztRQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBTnJELHVDQUF1QztRQUN2QyxpQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFLbkMsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFFckIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM1QyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQzlDLENBQUM7SUFDRixDQUFDO0FBR0YsQ0FBQztBQS9FRDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1CVDtRQUNELE1BQU0sRUFBRSxDQUFDO0VBQ1IsQ0FBQztRQUNGLFVBQVUsRUFBRTtZQUNWLGNBQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLFlBQUssQ0FBQyxVQUFVLEVBQUUsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHdCQUF3QixFQUFDLENBQUMsQ0FBQztnQkFDL0QsWUFBSyxDQUFDLFFBQVEsRUFBSSxZQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO2dCQUNqRSxpQkFBVSxDQUFDLG9CQUFvQixFQUFFLGNBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDMUQsaUJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0QsaUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtvQkFDN0IsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLDRCQUE0QixFQUFDLENBQUM7b0JBQ2hELGNBQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2IsQ0FBQztnQkFDRixpQkFBVSxDQUFDLGtCQUFrQixFQUFFO29CQUM3QixjQUFPLENBQUMsR0FBRyxFQUFFLFlBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSwyQkFBMkIsRUFBQyxDQUFDLENBQUM7aUJBQzlELENBQUM7Z0JBQ0YsaUJBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDM0IsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHdCQUF3QixFQUFDLENBQUM7b0JBQzVDLGNBQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2IsQ0FBQztnQkFDRixpQkFBVSxDQUFDLGdCQUFnQixFQUFFO29CQUMzQixjQUFPLENBQUMsR0FBRyxFQUFFLFlBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSx3QkFBd0IsRUFBQyxDQUFDLENBQUM7aUJBQzNELENBQUM7YUFDSCxDQUFDO1NBQ0g7S0FHRCxDQUFDOzt5QkFBQTtBQUVXLDZCQUFxQix3QkE2QmpDLENBQUEiLCJmaWxlIjoidGVzdC9hbmltYXRpb250ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCxcblx0XHRcdHRyaWdnZXIsXG5cdFx0XHRzdGF0ZSxcblx0XHRcdHN0eWxlLFxuXHRcdFx0dHJhbnNpdGlvbixcblx0XHRcdGFuaW1hdGVcbiAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3J0RWxlbWVudCB9IGZyb20gJy4uL3NvcnQuZWxlbWVudCc7XG5pbXBvcnQgeyBGdW5jdGlvblNlcnZpY2UgfSBmcm9tICcuLi9mdW5jdGlvbnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FuaW1hdGlvbi10ZXN0Jyxcblx0dGVtcGxhdGU6IGBcblx0XG5cblx0PGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGUgdGV4dC14cy1jZW50ZXJcIj5cblx0XHRcdFx0VGhpcyBpcyBhIHRlc3QgZm9yIEFuZ3VsYXIgQW5pbWF0aW9uIEVmZmVjdCBmb3IgVUlcblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3MgPSBcInRleHQteHMtY2VudGVyXCIgKm5nSWY9XCJyYXdSYW5kb21OdW1zXCI+XG5cdFx0XHRcdFx0PHNwYW4gKm5nRm9yPSBcImxldCBlYWNoUiBvZiByYXdSYW5kb21OdW1zOyAgbGV0IGluZCA9IGluZGV4XCIgPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgKGNsaWNrKT1cIm9uVG9nZ2xlKGluZClcIiBbQGhlcm9TdGF0ZV09XCJyYXdSYW5kb21OdW1zW2luZF1cIj57eyBlYWNoUi5udW0gfX08L2J1dHRvbj5cdFxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cdFx0XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cblxuXHRgLFxuXHRzdHlsZXM6IFtgXG5cdGBdLFxuXHRhbmltYXRpb25zOiBbXG5cdCAgdHJpZ2dlcignaGVyb1N0YXRlJywgW1xuXHQgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCkgc2NhbGUoMSknfSkpLFxuXHQgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCkgc2NhbGUoMS4xKSd9KSksXG5cdCAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxuXHQgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1vdXQnKSksXG5cdCAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGluYWN0aXZlJywgW1xuXHQgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMSknfSksXG5cdCAgICAgIGFuaW1hdGUoMTAwKVxuXHQgICAgXSksXG5cdCAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiB2b2lkJywgW1xuXHQgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSkgc2NhbGUoMSknfSkpXG5cdCAgICBdKSxcblx0ICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYWN0aXZlJywgW1xuXHQgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSBzY2FsZSgwKSd9KSxcblx0ICAgICAgYW5pbWF0ZSgyMDApXG5cdCAgICBdKSxcblx0ICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiB2b2lkJywgW1xuXHQgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCkgc2NhbGUoMCknfSkpXG5cdCAgICBdKVxuXHQgIF0pXG5cdF1cblxuXG59KVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uVGVzdENvbXBvbmV0IGltcGxlbWVudHMgT25Jbml0e1xuXHQvLyBASW5wdXQoKSBpbnB1dE51bXM6IG51bWJlcltdID0gbnVsbDtcblx0YW5pbWF0ZVN0YXRlIDogc3RyaW5nW10gPSBudWxsO1xuXG5cdHJhd1JhbmRvbU51bXMgOiBTb3J0RWxlbWVudFtdID0gW107XG5cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mdW5jdGlvblNlcnZpY2U6IEZ1bmN0aW9uU2VydmljZSl7XG5cdFx0XG5cdH1cblxuXHRuZ09uSW5pdCgpe1xuXHRcdHRoaXMucmF3UmFuZG9tTnVtcyA9IHRoaXMuX2Z1bmN0aW9uU2VydmljZS5nZXRSYW5kb21OdW1zKCk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5yYXdSYW5kb21OdW1zKTtcblxuXHR9XG5cblx0b25Ub2dnbGUoaW5kZXg6IG51bWJlcil7XG5cdFx0XG5cdFx0aWYoIXRoaXMucmF3UmFuZG9tTnVtc1tpbmRleF0gfHwgdGhpcy5yYXdSYW5kb21OdW1zW2luZGV4XS5zdGF0ZSA9PSAnaW5hY3RpdmUnKXtcblx0XHRcdGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIGFjdCBub3cuLlwiKTtcblx0XHRcdHRoaXMucmF3UmFuZG9tTnVtc1tpbmRleF0uc3RhdGUgPSAnYWN0aXZlJztcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIElOQUNUSVZFIG5vdy4uXCIpO1xuXHRcdFx0dGhpcy5yYXdSYW5kb21OdW1zW2luZGV4XS5zdGF0ZSA9ICdpbmFjdGl2ZSc7XG5cdFx0fVxuXHR9XG5cblx0XG59Il19
