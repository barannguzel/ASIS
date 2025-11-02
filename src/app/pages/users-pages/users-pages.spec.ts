import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPages } from './users-pages';

describe('UsersPages', () => {
  let component: UsersPages;
  let fixture: ComponentFixture<UsersPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
