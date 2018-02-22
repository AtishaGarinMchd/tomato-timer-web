import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerListComponent } from './components/timer-list/timer-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskInlineComponent } from './components/task-inline/task-inline.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';


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
    SettingsComponent,
    MenuDropdownComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
