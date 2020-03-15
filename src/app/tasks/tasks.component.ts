import {Component, OnInit} from '@angular/core';
import {Task, TasksService} from './tasks.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks$: Observable<Task[]>;

  constructor(private tasksService: TasksService) {
    this.tasks$ = this.tasksService.getTasks();
  }

  ngOnInit() {
  }

}
