import { Component, Input } from '@angular/core';
import { TaskComponent } from "../tasks/task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isStartAddTask: boolean = false;
  //private tasksService: TasksService;

  constructor(private tasksService: TasksService){
  }

  //private tasksService = new TasksService();
  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.userId);
  }

  onStartAddTask(){
    this.isStartAddTask=true;

  }

  onCancelAddTask(){
    this.isStartAddTask=false;

  }


  }

