import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar angular cli',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    }
  ]);

  changeHandler(event: Event) : void {
    const input = event.target as HTMLInputElement;
    const newTask: Task = {
      id: Date.now(),
      title: input.value,
      completed: false
    };
    this.addTask(newTask);
    input.value = '';
  }

  addTask(task: Task) : void {
    this.tasks.update((tasks) => [...tasks, task]);
  }

  deleteTask(index: number) : void {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }
}
