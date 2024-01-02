import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
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
