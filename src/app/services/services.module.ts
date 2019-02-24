import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoItemService } from './todo-item/todo-item.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToDoItemService
  ], 
  exports: [
    ToDoItemService,
  ]
})
export class ServicesModule { }
