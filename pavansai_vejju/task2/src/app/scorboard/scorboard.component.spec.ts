import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorboardComponent } from './scorboard.component';

describe('ScorboardComponent', () => {
  let component: ScorboardComponent;
  let fixture: ComponentFixture<ScorboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
