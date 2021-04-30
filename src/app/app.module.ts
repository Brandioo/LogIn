import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, DialogContentExampleDialog} from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {FormsModule} from "@angular/forms";
import { ListItemComponent } from './components/list-item/list-item.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { ShopOnlineComponent } from './components/shop/ShopOnline.component';
import {NikeComponent} from './components/nike/nike.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ListItemComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    ClientComponent,
    ShopOnlineComponent,
    NikeComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    // MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
