import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  constructor(private todoService: TodoService) {
  }

  add(title: string) {
    this.todoService.add(title);
  }
}
