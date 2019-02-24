import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoItemComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AngularMaterialModule,
  ],
})
export class ComponentsModule { }
