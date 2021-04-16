import { Component, Input, OnInit } from '@angular/core';
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = '';
  usersList=[];
  users=this.backendService.toDoUsers;

  isShown=true;

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
  }

  addUser() {
    // @ts-ignore
    this.usersList.push(this.user)
  }

}
