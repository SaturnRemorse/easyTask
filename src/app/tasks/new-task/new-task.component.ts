import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { type Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() close= new EventEmitter<void>();
  @Input({required: true}) userId!: string;
  task: Task = {
  id: "",
  userId: "",
  title: "",
  summary: "",
  dueDate: ""
};

private taskService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.task.id = new Date().getTime().toString(),
    console.log(this.task.id);
    this.task.userId = this.userId;
    this.taskService.addUserTask(this.task)
    this.close.emit();
    
  }

}
