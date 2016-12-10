export class Hero{ 
	
	constructor(public name: string, public state?: string){

		this.state = "inactive";
	}

	public toggleState(){
		if(this.state == "inactive"){
			this.state = "active";
		}else{
			this.state = "inactive";
		}
	}


}