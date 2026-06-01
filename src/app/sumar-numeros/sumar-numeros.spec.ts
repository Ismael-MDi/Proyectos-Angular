import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarNumeros } from './sumar-numeros';

describe('SumarNumeros', () => {
  let component: SumarNumeros;
  let fixture: ComponentFixture<SumarNumeros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumarNumeros],
    }).compileComponents();

    fixture = TestBed.createComponent(SumarNumeros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
