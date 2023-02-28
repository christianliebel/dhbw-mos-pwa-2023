import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.refresh();
  }

  async add(title: string) {
    await this.todoService.add(title);
    await this.refresh();
  }

  async refresh() {
    this.todos = await this.todoService.getAll();
  }
}
