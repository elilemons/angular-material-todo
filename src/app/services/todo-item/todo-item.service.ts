import { Injectable } from '@angular/core';
import { ToDoItem } from '../../models/todo-item';
import { TODOITEMS } from '../../TODOITEMS';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {
  
  constructor() { }

  addItem(item: ToDoItem): ToDoItem[] {
    console.log('add Item called, item: ', item);
    TODOITEMS.push(item);
    return [];
  }
}
