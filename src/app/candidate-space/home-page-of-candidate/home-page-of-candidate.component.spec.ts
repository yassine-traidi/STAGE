import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageOfCandidateComponent } from './home-page-of-candidate.component';

describe('HomePageOfCandidateComponent', () => {
  let component: HomePageOfCandidateComponent;
  let fixture: ComponentFixture<HomePageOfCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageOfCandidateComponent]
    });
    fixture = TestBed.createComponent(HomePageOfCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
