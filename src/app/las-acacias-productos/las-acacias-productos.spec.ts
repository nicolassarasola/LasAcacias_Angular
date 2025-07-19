import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasAcaciasProductos } from './las-acacias-productos';

describe('LasAcaciasProductos', () => {
  let component: LasAcaciasProductos;
  let fixture: ComponentFixture<LasAcaciasProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LasAcaciasProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasAcaciasProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
