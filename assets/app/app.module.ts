import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MergeSortComponent }   from './MergeSort.component';
import { BubbleSortComponent }   from './BubbleSort.component';
import { QuickSortComponent }   from './QuickSort.component';
import { FunctionService }   from './functions.service';

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import { routing } from './app.routes';

import { AnimationTestComponet }   from './test/animationtest.component';
import { AnimateComponent }   from './test/animate.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    routing
    ],
  declarations: [ 
  	AppComponent,    
  	MergeSortComponent ,
  	BubbleSortComponent,
  	QuickSortComponent,

  	AnimationTestComponet,
    AnimateComponent
	],
  providers: [
  	FunctionService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}]
  ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
