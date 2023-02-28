import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Dexie {
  todos!: Dexie.Table<Todo, string>;

  constructor() {
    super("todo-db");
    this.version(1).stores({
      todos: 'id'
    });
  }

  async add(title: string) {
    const todo = { title, id: crypto.randomUUID(), done: false };
    await this.todos.add(todo);
  }

  async getAll() {
    return await this.todos.toArray();
  }
}
