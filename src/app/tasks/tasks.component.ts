import { Component, Input } from '@angular/core';
import { TaskComponent } from "../tasks/task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from './task/task.model';

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

  tasks = [
    {
      id: "t1",
      userId: "u1",
      title: 'Master Angular',
      summary: 'Learn all angular basic and advance features',
      dueDate: "2025-12-31"
    },
    {
      id: "t2",
      userId: "u1",
      title: 'Master SpringBoot',
      summary: 'Learn all SpringBoot basic and advance features',
      dueDate: "2025-12-31"
    },
    {
      id: "t3",
      userId: 'u3',
      title: 'Master Docker',
      summary: 'Learn all Docker basic and advance features',
      dueDate: "2025-12-31"
    }

  ]

  get selectedUserTasks() {
    return this.tasks.filter((task)=>
      task.userId === this.userId);
  }

  onComplete(id:string){

    this.tasks = this.tasks.filter((task)=>task.id !== id);
  }

  onStartAddTask(){
    this.isStartAddTask=true;

  }

  onCancelAddTask(){
    this.isStartAddTask=false;

  }

  onSubmitTask(task: Task){
    this.tasks.push(task);
    this.isStartAddTask=false;
  }

    

  }

