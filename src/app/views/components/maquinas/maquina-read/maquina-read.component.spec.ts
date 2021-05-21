import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaReadComponent } from './maquina-read.component';

describe('MaquinaReadComponent', () => {
  let component: MaquinaReadComponent;
  let fixture: ComponentFixture<MaquinaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
