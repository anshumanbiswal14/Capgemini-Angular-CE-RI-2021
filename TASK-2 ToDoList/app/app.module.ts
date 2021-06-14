import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListComponent } from 'src/TodoList/Todocomponent';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
