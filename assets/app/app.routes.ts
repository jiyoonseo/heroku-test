// this file is to set routes.. 

import { Routes, RouterModule } from '@angular/router';

import { AnimateComponent }   from './test/animate.component';

import { MergeSortComponent }   from './MergeSort.component';


const appRoutes: Routes = [{ // Routes are an array of route definitions ( appRoutes : our array of routes )
	path: 'animate',
	component: AnimateComponent
},{
	path: '',
  	component: MergeSortComponent
}]

// export routing 
export const routing = RouterModule.forRoot(appRoutes); // used .forRoot() func because we're providing a configured router at the root of the application