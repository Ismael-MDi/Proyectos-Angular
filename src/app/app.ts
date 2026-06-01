import { Component } from '@angular/core';
import { SumarNumerosComponent } from './sumar-numeros/sumar-numeros';
import { CalcularFactorialComponent } from './calcular-factorial/calcular-factorial';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SumarNumerosComponent, CalcularFactorialComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-proyectos';
  proyectoActivo: string = 'inicio';
  cambiarProyecto(proyecto: string) {
    this.proyectoActivo = proyecto;
  }
}