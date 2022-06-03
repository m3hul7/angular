import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormthreeComponent } from './formthree.component';

describe('FormthreeComponent', () => {
  let component: FormthreeComponent;
  let fixture: ComponentFixture<FormthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
