import {Component} from '@angular/core';
import {Task, TasksService} from './tasks.service';
import {Observable} from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  tasks$: Observable<Task[]>;

  constructor(
    private tasksService: TasksService,
    private translateService: TranslateService
  ) {

    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.tasks$ = this.tasksService.getTasks();
  }

}
