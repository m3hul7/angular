import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingListComponent } from './sibling-list.component';

describe('SiblingListComponent', () => {
  let component: SiblingListComponent;
  let fixture: ComponentFixture<SiblingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
