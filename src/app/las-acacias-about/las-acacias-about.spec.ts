import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasAcaciasAbout } from './las-acacias-about';

describe('LasAcaciasAbout', () => {
  let component: LasAcaciasAbout;
  let fixture: ComponentFixture<LasAcaciasAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LasAcaciasAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasAcaciasAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
