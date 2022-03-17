import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingFormComponent } from './sibling-form.component';

describe('SiblingFormComponent', () => {
  let component: SiblingFormComponent;
  let fixture: ComponentFixture<SiblingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
