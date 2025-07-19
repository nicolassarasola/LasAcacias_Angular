import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasAcaciasCarrito } from './las-acacias-carrito';

describe('LasAcaciasCarrito', () => {
  let component: LasAcaciasCarrito;
  let fixture: ComponentFixture<LasAcaciasCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LasAcaciasCarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasAcaciasCarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
