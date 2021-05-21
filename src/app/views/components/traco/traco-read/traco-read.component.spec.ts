import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracoReadComponent } from './traco-read.component';

describe('TracoReadComponent', () => {
  let component: TracoReadComponent;
  let fixture: ComponentFixture<TracoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
