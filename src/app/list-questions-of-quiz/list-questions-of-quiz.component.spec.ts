import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionsOfQuizComponent } from './list-questions-of-quiz.component';

describe('ListQuestionsOfQuizComponent', () => {
  let component: ListQuestionsOfQuizComponent;
  let fixture: ComponentFixture<ListQuestionsOfQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListQuestionsOfQuizComponent]
    });
    fixture = TestBed.createComponent(ListQuestionsOfQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
