import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCantidadUnidades } from './input-cantidad-unidades';

describe('InputCantidadUnidades', () => {
  let component: InputCantidadUnidades;
  let fixture: ComponentFixture<InputCantidadUnidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCantidadUnidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCantidadUnidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
