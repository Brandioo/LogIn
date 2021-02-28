import { Component, Input, OnInit } from '@angular/core';
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user='';

  users=this.backendService.toDoUsers;

  isShown=true;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
  }

  addUser() {
    this.backendService.toDoUsers.push(this.user);
  }

}
