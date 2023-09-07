import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubmissionsComponent } from './list-submissions.component';

describe('ListSubmissionsComponent', () => {
  let component: ListSubmissionsComponent;
  let fixture: ComponentFixture<ListSubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSubmissionsComponent]
    });
    fixture = TestBed.createComponent(ListSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
