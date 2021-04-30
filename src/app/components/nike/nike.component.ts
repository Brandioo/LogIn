import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-nike',
	templateUrl: './nike.component.html',
	styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit, OnChanges, OnDestroy {
	@Input() user: any;
	constructor() { }

	ngOnInit(){
		console.log(this.user);
	}

	ngOnChanges(){
		console.log('change')
	}

	ngOnDestroy(){
		console.log('destroy')
	}

}
