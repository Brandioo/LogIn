import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../service/backend.service";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";
import {ItemListModel} from 'src/app/models/itemlist.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newUser: ItemListModel = {
    title: '',
    description: ''
  };


  users: any;

  showFrameClass = true;

  isShown = true;

  constructor(private backendService: BackendService) {
  }


  ngOnInit(): void {
    this.backendService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  addUser(form: NgForm): void {
    // this.newUser = form.value;
    // this.backendService.addUser(this.newUser).subscribe((res) => {
    //   this.users.push(this.newUser);
    //   form.resetForm();
    // })

    this.newUser = form.value;
    if (this.newUser.title && this.newUser.description) {
      this.backendService.addUser(this.newUser).subscribe((res) => {
        this.users.push(res);
        form.resetForm()
      });
    }
  }
}
