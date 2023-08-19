import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTodo(todo: any) {
    return this.http.post<any>(this.apiUrl, todo);
  }

  updateTodo(todo: any) {
    return this.http.put(`${this.apiUrl}/${todo._id}`, todo);
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
