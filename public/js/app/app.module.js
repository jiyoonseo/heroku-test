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
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const MergeSort_component_1 = require('./MergeSort.component');
const BubbleSort_component_1 = require('./BubbleSort.component');
const QuickSort_component_1 = require('./QuickSort.component');
const functions_service_1 = require('./functions.service');
const common_1 = require('@angular/common');
const app_routes_1 = require('./app.routes');
const animationtest_component_1 = require('./test/animationtest.component');
const animate_component_1 = require('./test/animate.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            MergeSort_component_1.MergeSortComponent,
            BubbleSort_component_1.BubbleSortComponent,
            QuickSort_component_1.QuickSortComponent,
            animationtest_component_1.AnimationTestComponet,
            animate_component_1.AnimateComponent
        ],
        providers: [
            functions_service_1.FunctionService,
            [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxtQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxnQ0FBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxzQ0FBcUMsdUJBQXVCLENBQUMsQ0FBQTtBQUM3RCx1Q0FBc0Msd0JBQXdCLENBQUMsQ0FBQTtBQUMvRCxzQ0FBcUMsdUJBQXVCLENBQUMsQ0FBQTtBQUM3RCxvQ0FBa0MscUJBQXFCLENBQUMsQ0FBQTtBQUV4RCx5QkFHTyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pCLDZCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2QywwQ0FBd0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RSxvQ0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQXNCOUQ7QUFBeUIsQ0FBQztBQXBCMUI7SUFBQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQU87WUFDWixnQ0FBYTtZQUNiLG9CQUFPO1NBQ047UUFDSCxZQUFZLEVBQUU7WUFDYiw0QkFBWTtZQUNaLHdDQUFrQjtZQUNsQiwwQ0FBbUI7WUFDbkIsd0NBQWtCO1lBRWxCLCtDQUFxQjtZQUNwQixvQ0FBZ0I7U0FDbEI7UUFDQSxTQUFTLEVBQUU7WUFDVixtQ0FBZTtZQUNkLENBQUMsRUFBQyxPQUFPLEVBQUUseUJBQWdCLEVBQUUsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUM7U0FDOUQ7UUFDRCxTQUFTLEVBQUssQ0FBRSw0QkFBWSxDQUFFO0tBQy9CLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IE1lcmdlU29ydENvbXBvbmVudCB9ICAgZnJvbSAnLi9NZXJnZVNvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1YmJsZVNvcnRDb21wb25lbnQgfSAgIGZyb20gJy4vQnViYmxlU29ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUXVpY2tTb3J0Q29tcG9uZW50IH0gICBmcm9tICcuL1F1aWNrU29ydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVuY3Rpb25TZXJ2aWNlIH0gICBmcm9tICcuL2Z1bmN0aW9ucy5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgTG9jYXRpb25TdHJhdGVneSxcbiAgSGFzaExvY2F0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5pbXBvcnQgeyBBbmltYXRpb25UZXN0Q29tcG9uZXQgfSAgIGZyb20gJy4vdGVzdC9hbmltYXRpb250ZXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmltYXRlQ29tcG9uZW50IH0gICBmcm9tICcuL3Rlc3QvYW5pbWF0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiAgICAgIFsgXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICByb3V0aW5nXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbIFxuICBcdEFwcENvbXBvbmVudCwgICAgXG4gIFx0TWVyZ2VTb3J0Q29tcG9uZW50ICxcbiAgXHRCdWJibGVTb3J0Q29tcG9uZW50LFxuICBcdFF1aWNrU29ydENvbXBvbmVudCxcblxuICBcdEFuaW1hdGlvblRlc3RDb21wb25ldCxcbiAgICBBbmltYXRlQ29tcG9uZW50XG5cdF0sXG4gIHByb3ZpZGVyczogW1xuICBcdEZ1bmN0aW9uU2VydmljZSxcbiAgICBbe3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX1dXG4gIF0sIFxuICBib290c3RyYXA6ICAgIFsgQXBwQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
