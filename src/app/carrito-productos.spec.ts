import { TestBed } from '@angular/core/testing';

import { CarritoProductos } from './carrito-productos';

describe('CarritoProductos', () => {
  let service: CarritoProductos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoProductos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
