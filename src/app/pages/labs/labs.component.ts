import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi aplicación';
  tasks = signal([
    'Instalar angular cli',
    'Crear proyecto',
    'Crear componentes'
  ]);
}
