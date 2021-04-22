import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnChanges, OnDestroy {
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
