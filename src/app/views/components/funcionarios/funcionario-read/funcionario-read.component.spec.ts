import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioReadComponent } from './funcionario-read.component';

describe('FuncionarioReadComponent', () => {
  let component: FuncionarioReadComponent;
  let fixture: ComponentFixture<FuncionarioReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
