import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersuccessComponent } from './ordersuccess.component';

describe('OrdersuccessComponent', () => {
  let component: OrdersuccessComponent;
  let fixture: ComponentFixture<OrdersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
