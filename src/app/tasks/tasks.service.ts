import { Injectable } from "@angular/core";
import { Task } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{

     private tasks = [
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
    
      ];

      constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }

      getUserTask(userId: string){
        return this.tasks.filter((task)=>
      task.userId === userId);
      }

      removeUserTask(taskId: string){
        this.tasks = this.tasks.filter((task)=>task.id !== taskId);
        this.saveTasks();
      }

      addUserTask(task: Task){
        this.tasks.push(task);
        this.saveTasks();
      }


      private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }


      

}