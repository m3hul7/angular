import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemaskComponent } from './phonemask.component';

describe('PhonemaskComponent', () => {
  let component: PhonemaskComponent;
  let fixture: ComponentFixture<PhonemaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonemaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
