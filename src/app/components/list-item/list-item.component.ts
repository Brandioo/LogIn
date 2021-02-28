import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user='';
  constructor() { }

  ngOnInit(){
    console.log('init')
  }

  ngOnChanges(){
    console.log('change')
  }

  ngOnDestroy(){
    console.log('destroy')
  }

}
