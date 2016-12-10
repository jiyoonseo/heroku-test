import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  
  <div class="container-fluid">
  	<div class="row">
  		<span class="float-xs-right">See More <a href="https://github.com/jiyoonseo/">@GitRepo</a></span>
  	</div>
  	<div class="row">
		  <router-outlet></router-outlet>      
	  </div>
  	
  </div>
  

  `
})
export class AppComponent { 

}
