import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpPatternUserComponent } from './mvp-pattern-user.component';

describe('MvpPatternUserComponent', () => {
  let component: MvpPatternUserComponent;
  let fixture: ComponentFixture<MvpPatternUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpPatternUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpPatternUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
