import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizzesForCandidateComponent } from './list-quizzes-for-candidate.component';

describe('ListQuizzesForCandidateComponent', () => {
  let component: ListQuizzesForCandidateComponent;
  let fixture: ComponentFixture<ListQuizzesForCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListQuizzesForCandidateComponent]
    });
    fixture = TestBed.createComponent(ListQuizzesForCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
