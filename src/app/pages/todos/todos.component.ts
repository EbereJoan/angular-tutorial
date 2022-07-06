import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../app/models';
import { TodoServices } from '../../../app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoRecords: Todo[] = [];

  constructor( 
    private todoServices: TodoServices
  ) { }

  ngOnInit(): void {
    this.getTodoRecords();
  }


  getTodoRecords(): void{
      this.todoRecords = this.todoServices.retrieveTodos();
      console.log('todos', this.todoRecords)
  }



}
