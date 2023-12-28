import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
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

  newTaskCtrl = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern("^\\S.*$"),
      Validators.minLength(3)
    ]
  });

  changeHandler() : void {
    if (this.newTaskCtrl.valid) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskCtrl.value,
        completed: false
      };
      this.addTask(newTask);
      this.newTaskCtrl.setValue('')
    }
  }

  addTask(task: Task) : void {
    this.tasks.update((tasks) => [...tasks, task]);
  }

  deleteTask(index: number) : void {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }

  updateTask(index: number) : void {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }
}
