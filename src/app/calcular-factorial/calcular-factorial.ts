import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-factorial',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; padding: 20px 0;">
      <input [(ngModel)]="numero" type="number" placeholder="Ingresa un número" style="padding: 10px; width: 100%; max-width: 250px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 16px; text-align: center;">
      <button (click)="calcular()" style="background-color: #10b981; color: white; border: none; padding: 12px 25px; font-size: 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; max-width: 250px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        Calcular
      </button>
      <p style="font-size: 22px; font-weight: bold; margin-top: 10px; color: #0f172a;">Resultado: {{ factorial }}</p>
    </div>
  `
})
export class CalcularFactorialComponent {
  numero: number = 1;
  factorial: number = 1;
  calcular() {
    this.factorial = 1;
    for (let i = 1; i <= this.numero; i++) { this.factorial *= i; }
  }
}