import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login.component';
import { TasksComponent } from 'imports/ui/app/components/tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [Login, TasksComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
