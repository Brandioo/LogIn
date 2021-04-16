import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {UserComponent} from "./components/user/user.component";
import {HomeComponent} from "./components/home/home.component";
import {ListItemComponent} from "./components/list-item/list-item.component";

const routes: Routes = [
  {path: 'todo', component: TodoListComponent},
  {path: 'user', component: UserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listitem', component: ListItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

