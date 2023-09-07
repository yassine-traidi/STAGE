import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizManagmentComponent } from './quiz-managment.component';

describe('QuizManagmentComponent', () => {
  let component: QuizManagmentComponent;
  let fixture: ComponentFixture<QuizManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizManagmentComponent]
    });
    fixture = TestBed.createComponent(QuizManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
