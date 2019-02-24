import { TestBed } from '@angular/core/testing';

import { ToDoItemService } from './todo-item.service';

describe('TodoItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoItemService = TestBed.get(ToDoItemService);
    expect(service).toBeTruthy();
  });
});
