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
const hero_1 = require('./hero');
let AnimateComponent = class AnimateComponent {
    constructor() {
        this.heroes = [];
        this.test = ['heroOne', 'heroTwo', 'heroThree', 'heroFour', 'heroFive'];
        for (var i = 0; i < this.test.length; i++) {
            this.heroes.push(new hero_1.Hero(this.test[i]));
        }
        console.log(this.heroes);
    }
};
AnimateComponent = __decorate([
    core_1.Component({
        selector: 'my-animate',
        template: `
	<div class="row">
		<ul class="nav nav-pills">
			<li  class="nav-item">
				<a routerLink="/" class="nav-link" routerLinkActive="active" >HOME</a>
			</li>
		</ul>	
	</div>
	<!--  DELETE ABOVE LATER...  -->	

	<div class="jumbotron">
		<div class="bg-success" >
			my-animate
		  <div>
		    <button class="btn secondary"
		    	*ngFor="let hero of heroes"
		        [@shrinkOut]="hero.state"
		        (click)="hero.toggleState()">
		      {{hero.name}}
		    </button>
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
                    core_1.style({ transform: 'translateX(150%) scale(1)' }),
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
            ]),
            core_1.trigger('shrinkOut', [
                core_1.state('active', core_1.style({ height: '300px' })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    }), 
    __metadata('design:paramtypes', [])
], AnimateComponent);
exports.AnimateComponent = AnimateComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYW5pbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQU1VLGVBQWUsQ0FBQyxDQUFBO0FBSTFCLHVCQUFxQixRQUVyQixDQUFDLENBRjRCO0FBK0Q3QjtJQU1DO1FBSkEsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixTQUFJLEdBQWEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFHNUUsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0FBS0YsQ0FBQztBQTdFRDtJQUFDLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXdCVDtRQUNELE1BQU0sRUFBRSxDQUFDO0VBQ1IsQ0FBQztRQUNGLFVBQVUsRUFBRTtZQUNWLGNBQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ25CLFlBQUssQ0FBQyxVQUFVLEVBQUUsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHdCQUF3QixFQUFDLENBQUMsQ0FBQztnQkFDL0QsWUFBSyxDQUFDLFFBQVEsRUFBSSxZQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsMEJBQTBCLEVBQUMsQ0FBQyxDQUFDO2dCQUNqRSxpQkFBVSxDQUFDLG9CQUFvQixFQUFFLGNBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDMUQsaUJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0QsaUJBQVUsQ0FBQyxrQkFBa0IsRUFBRTtvQkFDN0IsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLDJCQUEyQixFQUFDLENBQUM7b0JBQy9DLGNBQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2IsQ0FBQztnQkFDRixpQkFBVSxDQUFDLGtCQUFrQixFQUFFO29CQUM3QixjQUFPLENBQUMsR0FBRyxFQUFFLFlBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSwyQkFBMkIsRUFBQyxDQUFDLENBQUM7aUJBQzlELENBQUM7Z0JBQ0YsaUJBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDM0IsWUFBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLHdCQUF3QixFQUFDLENBQUM7b0JBQzVDLGNBQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2IsQ0FBQztnQkFDRixpQkFBVSxDQUFDLGdCQUFnQixFQUFFO29CQUMzQixjQUFPLENBQUMsR0FBRyxFQUFFLFlBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSx3QkFBd0IsRUFBQyxDQUFDLENBQUM7aUJBQzNELENBQUM7YUFDSCxDQUFDO1lBQ0YsY0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDbkIsWUFBSyxDQUFDLFFBQVEsRUFBRSxZQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDekMsaUJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxjQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzFELGlCQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFFNUQsQ0FBQztTQUNIO0tBR0QsQ0FBQzs7b0JBQUE7QUFFVyx3QkFBZ0IsbUJBZ0I1QixDQUFBIiwiZmlsZSI6InRlc3QvYW5pbWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsXG5cdFx0XHR0cmlnZ2VyLFxuXHRcdFx0c3RhdGUsXG5cdFx0XHRzdHlsZSxcblx0XHRcdHRyYW5zaXRpb24sXG5cdFx0XHRhbmltYXRlXG4gICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29ydEVsZW1lbnQgfSBmcm9tICcuLi9zb3J0LmVsZW1lbnQnO1xuaW1wb3J0IHsgRnVuY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vZnVuY3Rpb25zLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJyBcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktYW5pbWF0ZScsXG5cdHRlbXBsYXRlOiBgXG5cdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHQ8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzXCI+XG5cdFx0XHQ8bGkgIGNsYXNzPVwibmF2LWl0ZW1cIj5cblx0XHRcdFx0PGEgcm91dGVyTGluaz1cIi9cIiBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiID5IT01FPC9hPlxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPlx0XG5cdDwvZGl2PlxuXHQ8IS0tICBERUxFVEUgQUJPVkUgTEFURVIuLi4gIC0tPlx0XG5cblx0PGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxuXHRcdDxkaXYgY2xhc3M9XCJiZy1zdWNjZXNzXCIgPlxuXHRcdFx0bXktYW5pbWF0ZVxuXHRcdCAgPGRpdj5cblx0XHQgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBzZWNvbmRhcnlcIlxuXHRcdCAgICBcdCpuZ0Zvcj1cImxldCBoZXJvIG9mIGhlcm9lc1wiXG5cdFx0ICAgICAgICBbQHNocmlua091dF09XCJoZXJvLnN0YXRlXCJcblx0XHQgICAgICAgIChjbGljayk9XCJoZXJvLnRvZ2dsZVN0YXRlKClcIj5cblx0XHQgICAgICB7e2hlcm8ubmFtZX19XG5cdFx0ICAgIDwvYnV0dG9uPlxuXHRcdCAgPC9kaXY+XHRcblx0XHQ8L2Rpdj5cdFx0XG5cdDwvZGl2PlxuXHRcblx0YCxcblx0c3R5bGVzOiBbYFxuXHRgXSxcblx0YW5pbWF0aW9uczogW1xuXHQgIHRyaWdnZXIoJ2hlcm9TdGF0ZScsIFtcblx0ICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApIHNjYWxlKDEpJ30pKSxcblx0ICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApIHNjYWxlKDEuMSknfSkpLFxuXHQgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1pbicpKSxcblx0ICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2Utb3V0JykpLFxuXHQgICAgdHJhbnNpdGlvbigndm9pZCA9PiBpbmFjdGl2ZScsIFtcblx0ICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTUwJSkgc2NhbGUoMSknfSksXG5cdCAgICAgIGFuaW1hdGUoMTAwKVxuXHQgICAgXSksXG5cdCAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiB2b2lkJywgW1xuXHQgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSkgc2NhbGUoMSknfSkpXG5cdCAgICBdKSxcblx0ICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYWN0aXZlJywgW1xuXHQgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKSBzY2FsZSgwKSd9KSxcblx0ICAgICAgYW5pbWF0ZSgyMDApXG5cdCAgICBdKSxcblx0ICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiB2b2lkJywgW1xuXHQgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCkgc2NhbGUoMCknfSkpXG5cdCAgICBdKVxuXHQgIF0pLFxuXHQgIHRyaWdnZXIoJ3Nocmlua091dCcsIFtcblx0ICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7aGVpZ2h0OiAnMzAwcHgnfSkpLFxuXHQgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1pbicpKSxcblx0ICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2Utb3V0JykpXG5cdCAgICBcblx0ICBdKVx0ICBcblx0XVxuXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlQ29tcG9uZW50IHtcblxuXHRoZXJvZXMgOiBIZXJvW10gPSBbXTtcblxuXHR0ZXN0OiBzdHJpbmdbXSA9IFsnaGVyb09uZScsICdoZXJvVHdvJywgJ2hlcm9UaHJlZScsICdoZXJvRm91cicsICdoZXJvRml2ZSddO1xuXG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0Zm9yKHZhciBpID0gMCA7IGkgPCB0aGlzLnRlc3QubGVuZ3RoOyBpKyspe1xuXHRcdFx0dGhpcy5oZXJvZXMucHVzaChuZXcgSGVybyh0aGlzLnRlc3RbaV0gKSk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHRoaXMuaGVyb2VzKTtcblx0fVxuXG5cblxuXHRcbn0iXX0=
