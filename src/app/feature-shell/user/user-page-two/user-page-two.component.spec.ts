import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageTwoComponent } from './user-page-two.component';

describe('UserPageTwoComponent', () => {
  let component: UserPageTwoComponent;
  let fixture: ComponentFixture<UserPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
