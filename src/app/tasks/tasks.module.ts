import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TasksRoutingModule} from './tasks-routing.module';
import {MatListModule} from '@angular/material/list';
import {TasksService} from './tasks.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCheckboxModule,
    MatToolbarModule,
    TasksRoutingModule
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule { }
