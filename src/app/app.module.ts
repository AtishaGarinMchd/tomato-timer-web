import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TimerComponent } from './timer/timer.component';
import { TimerListComponent } from './timer-list/timer-list.component';
import { TaskComponent } from './task/task.component';
import { TaskInlineComponent } from './task-inline/task-inline.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TimerComponent,
    TimerListComponent,
    TaskComponent,
    TaskInlineComponent,
    TaskListComponent,
    FooterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
