import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaInputComponent } from './maquina-input.component';

describe('MaquinaInputComponent', () => {
  let component: MaquinaInputComponent;
  let fixture: ComponentFixture<MaquinaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
