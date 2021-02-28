import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newUser = '';

  users=this.backendService.toDoUsers;

  showFrameClass=true;

  isShown=true;

  constructor(private backendService: BackendService) {
  }


  ngOnInit(): void {
  }

  addUser() {
    this.backendService.toDoUsers.push(this.newUser);
  }

}
