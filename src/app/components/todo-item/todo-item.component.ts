import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../../models/todo-item';
import { ToDoItemService } from '../../services/todo-item/todo-item.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: string;
  private i = 3;
  constructor(
    private toDoItemService: ToDoItemService
  ) {
  }

  ngOnInit() {
    console.log('init', this.i);
  }

  addItem() {
    this.toDoItemService.addItem({ 
      id: this.i, 
      name: this.item, 
      done: false});
    this.i++;
    this.clear();
  }

  clear() {
    this.item = undefined;
  }
}
