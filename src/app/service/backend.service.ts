import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  isLoggedIn=false;

  toDoUsers = [
    'Brand',
    'Xhoi'
  ];

  constructor() {
  }
}
