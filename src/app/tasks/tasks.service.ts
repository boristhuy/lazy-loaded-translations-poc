import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const fakeTasks: Task[] = [
  {
    id: 1,
    title: 'Setup Angular application',
    completed: false
  },
  {
    id: 2,
    title: 'Add ngx-translate for i18n support',
    completed: false
  },
  {
    id: 3,
    title: 'Lazy load task module',
    completed: false
  }
];

@Injectable()
export class TasksService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(fakeTasks).pipe(delay(2000));
  }
}
