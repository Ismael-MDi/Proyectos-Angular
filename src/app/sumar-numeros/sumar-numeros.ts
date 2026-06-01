import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sumar-numeros',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; padding: 20px 0;">
      <input [(ngModel)]="num1" type="number" placeholder="Número 1" style="padding: 10px; width: 100%; max-width: 250px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 16px; text-align: center;">
      <input [(ngModel)]="num2" type="number" placeholder="Número 2" style="padding: 10px; width: 100%; max-width: 250px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 16px; text-align: center;">
      <button (click)="sumar()" style="background-color: #10b981; color: white; border: none; padding: 12px 25px; font-size: 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; max-width: 250px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        Sumar
      </button>
      <p style="font-size: 22px; font-weight: bold; margin-top: 10px; color: #0f172a;">Resultado: {{ resultado }}</p>
    </div>
  `
})
export class SumarNumerosComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  sumar() { this.resultado = this.num1 + this.num2; }
}