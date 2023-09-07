import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionManagmentComponent } from './question-managment.component';

describe('QuestionManagmentComponent', () => {
  let component: QuestionManagmentComponent;
  let fixture: ComponentFixture<QuestionManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionManagmentComponent]
    });
    fixture = TestBed.createComponent(QuestionManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
