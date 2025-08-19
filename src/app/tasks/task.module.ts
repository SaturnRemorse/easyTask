import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../shared/card/card.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [NewTaskComponent, TaskComponent, TasksComponent],
    imports:[CommonModule, FormsModule, SharedModule],
    exports: [TasksComponent]
})
export class TaskModule{

}