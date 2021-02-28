import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'LogIn';
  myName = 'SDA';
  user = '';
  password = '';
  dateObj = new Date();

  onAddForm(formValue: any) {
    this.user = formValue.value.username;
    this.password = formValue.value.password;
  }
}



