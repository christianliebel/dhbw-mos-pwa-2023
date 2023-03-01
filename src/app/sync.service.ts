import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(private todoService: TodoService, private httpClient: HttpClient) { }

  async sync() {
    // 1. Todos aus der Datenbank auslesen
    const allTodos = await this.todoService.getAll();
    // 2. Todos an Server schicken
    const mergedTodos = await firstValueFrom(this.httpClient.post<Todo[]>('http://localhost:3030/sync', allTodos));
    // 3. Todos in Datenbank aktualisieren
    await this.todoService.bulkPut(mergedTodos);
  }
}
