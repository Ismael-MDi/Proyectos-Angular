import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularFactorial } from './calcular-factorial';

describe('CalcularFactorial', () => {
  let component: CalcularFactorial;
  let fixture: ComponentFixture<CalcularFactorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcularFactorial],
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularFactorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
