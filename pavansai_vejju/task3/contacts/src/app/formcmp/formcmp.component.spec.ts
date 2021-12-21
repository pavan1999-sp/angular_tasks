import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcmpComponent } from './formcmp.component';

describe('FormcmpComponent', () => {
  let component: FormcmpComponent;
  let fixture: ComponentFixture<FormcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
