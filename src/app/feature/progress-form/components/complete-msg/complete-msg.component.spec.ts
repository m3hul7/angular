import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteMsgComponent } from './complete-msg.component';

describe('CompleteMsgComponent', () => {
  let component: CompleteMsgComponent;
  let fixture: ComponentFixture<CompleteMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
