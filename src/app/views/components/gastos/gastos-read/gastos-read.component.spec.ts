import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosReadComponent } from './gastos-read.component';

describe('GastosReadComponent', () => {
  let component: GastosReadComponent;
  let fixture: ComponentFixture<GastosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
