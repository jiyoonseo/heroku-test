// this file is to set routes.. 
"use strict";
const router_1 = require('@angular/router');
const animate_component_1 = require('./test/animate.component');
const MergeSort_component_1 = require('./MergeSort.component');
const appRoutes = [{
        path: 'animate',
        component: animate_component_1.AnimateComponent
    }, {
        path: '',
        component: MergeSort_component_1.MergeSortComponent
    }];
// export routing 
exports.routing = router_1.RouterModule.forRoot(appRoutes); // used .forRoot() func because we're providing a configured router at the root of the application

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDOztBQUVoQyx5QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCxvQ0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQUU5RCxzQ0FBcUMsdUJBQXVCLENBQUMsQ0FBQTtBQUc3RCxNQUFNLFNBQVMsR0FBVyxDQUFDO1FBQzFCLElBQUksRUFBRSxTQUFTO1FBQ2YsU0FBUyxFQUFFLG9DQUFnQjtLQUMzQixFQUFDO1FBQ0QsSUFBSSxFQUFFLEVBQUU7UUFDTixTQUFTLEVBQUUsd0NBQWtCO0tBQy9CLENBQUMsQ0FBQTtBQUVGLGtCQUFrQjtBQUNMLGVBQU8sR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGtHQUFrRyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBmaWxlIGlzIHRvIHNldCByb3V0ZXMuLiBcblxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBbmltYXRlQ29tcG9uZW50IH0gICBmcm9tICcuL3Rlc3QvYW5pbWF0ZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBNZXJnZVNvcnRDb21wb25lbnQgfSAgIGZyb20gJy4vTWVyZ2VTb3J0LmNvbXBvbmVudCc7XG5cblxuY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbeyAvLyBSb3V0ZXMgYXJlIGFuIGFycmF5IG9mIHJvdXRlIGRlZmluaXRpb25zICggYXBwUm91dGVzIDogb3VyIGFycmF5IG9mIHJvdXRlcyApXG5cdHBhdGg6ICdhbmltYXRlJyxcblx0Y29tcG9uZW50OiBBbmltYXRlQ29tcG9uZW50XG59LHtcblx0cGF0aDogJycsXG4gIFx0Y29tcG9uZW50OiBNZXJnZVNvcnRDb21wb25lbnRcbn1dXG5cbi8vIGV4cG9ydCByb3V0aW5nIFxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpOyAvLyB1c2VkIC5mb3JSb290KCkgZnVuYyBiZWNhdXNlIHdlJ3JlIHByb3ZpZGluZyBhIGNvbmZpZ3VyZWQgcm91dGVyIGF0IHRoZSByb290IG9mIHRoZSBhcHBsaWNhdGlvbiJdfQ==