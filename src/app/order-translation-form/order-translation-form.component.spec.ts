import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTranslationFormComponent } from './order-translation-form.component';

describe('OrderTranslationFormComponent', () => {
  let component: OrderTranslationFormComponent;
  let fixture: ComponentFixture<OrderTranslationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTranslationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTranslationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
