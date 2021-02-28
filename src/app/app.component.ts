import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {BackendService} from "./service/backend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'LogIn';
  // myName = 'SDA';
  user = '';
  password = '';
  dateObj = new Date();
  isLoggedIn = false;

  constructor(private router: Router, public backendService: BackendService) {

  }

  ngOnInit(): void {
    this.isLoggedIn = Boolean(localStorage.getItem('isLoggedIn'));
  }

  logOut() {
    const answer=window.confirm('Are You Sure?');
    if(answer){
      this.backendService.isLoggedIn = false;
      this.router.navigateByUrl('/')
    }
  }
}



