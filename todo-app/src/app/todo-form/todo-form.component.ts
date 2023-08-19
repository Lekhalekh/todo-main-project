import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({
      description: '',
      completed: false,
    });
  }

  ngOnInit(): void {}

  addTodo() {
    this.todoService.addTodo(this.todoForm.value).subscribe(() => {
      this.todoForm.reset();
    });
  }
}

