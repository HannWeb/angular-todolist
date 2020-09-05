import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Todo from '../models/Todos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosURL: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: String = '?_limit=10';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosURL + this.todosLimit);
  }

  updateTodo(todo: Todo): Observable<any> {
    const putURL: string = `${this.todosURL}/${todo.id}`;
    return this.http.put(putURL, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const deleteURL: string = `${this.todosURL}/${todo.id}`;
    return this.http.delete(deleteURL, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }
}
