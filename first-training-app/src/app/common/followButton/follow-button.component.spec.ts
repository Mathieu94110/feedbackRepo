import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedButtonComponent } from './follow-button.component';

describe('FollowedButtonComponent', () => {
  let component: FollowedButtonComponent;
  let fixture: ComponentFixture<FollowedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowedButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
