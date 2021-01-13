import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgencySelectorComponent } from './urgency-selector.component';

describe('UrgencySelectorComponent', () => {
  let component: UrgencySelectorComponent;
  let fixture: ComponentFixture<UrgencySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgencySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
