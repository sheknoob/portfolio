import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { fadeIn, setLineThrough } from '@animations';
import { Task } from '@shared/interfaces/task.interface';
import { TaskService } from '@shared/services/task-manager/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [fadeIn]
})
export class BodyComponent implements OnDestroy {

  @Input()
  public task: Task;

  @Output()
  public deleteTask: EventEmitter<Task> = new EventEmitter<Task>();

  public subscription: Subscription = new Subscription();

  constructor(
    private taskService: TaskService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public setLineThrough(): object {
    return setLineThrough(this.task);
  }

  public onToggleFromUI(task: Task): void {
    task.isComplete = !task.isComplete;
  }

  public onToggleFromBackEnd(task: Task): void {
    this.subscription = this.taskService
      .toggleTask$(task)
      .subscribe();
  }

  public onDelete(task: Task): void {
    this.deleteTask.emit(task);
  }

  public async onEdit(task: Task): Promise<void> {
    await this.taskService
      .editTask$(task)
      .toPromise();
  }

}
