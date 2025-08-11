import { Component, EventEmitter, Output, Input } from '@angular/core';
import { type Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancelTask= new EventEmitter<void>();
  @Input({required: true}) userId!: string;
  @Output() submit = new EventEmitter<Task>();
  task: Task = {
  id: "",
  userId: "",
  title: "",
  summary: "",
  dueDate: ""
};

  onCancel(){
    this.cancelTask.emit();
  }

  onSubmit(){
    this.task.id = new Date().getTime().toString(),
    console.log(this.task.id);
    this.task.userId = this.userId;
    this.submit.emit(this.task);
  }

}
