import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatepageComponent } from './calculatepage.component';

describe('CalculatepageComponent', () => {
  let component: CalculatepageComponent;
  let fixture: ComponentFixture<CalculatepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
