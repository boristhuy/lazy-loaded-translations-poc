import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TasksRoutingModule} from './tasks-routing.module';
import {MatListModule} from '@angular/material/list';
import {TasksService} from './tasks.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/tasks/', '.json');
}

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCheckboxModule,
    MatToolbarModule,
    TasksRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      isolate: true
    })
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule { }
