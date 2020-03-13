import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import { TasksComponent } from './tasks.component';
import {TasksRoutingModule} from './tasks-routing.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CardModule,
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
