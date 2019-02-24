import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../app/angular-material.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AngularMaterialModule
  ],
  exports: [
    RouterModule,
    AngularMaterialModule
  ]
})
export class AppRoutingModule { }
