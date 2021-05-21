import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoReadComponent } from './producao-read.component';

describe('ProducaoReadComponent', () => {
  let component: ProducaoReadComponent;
  let fixture: ComponentFixture<ProducaoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducaoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducaoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
