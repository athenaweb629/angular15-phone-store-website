import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailComponent } from './orderdetail.component';

describe('OrderdetailComponent', () => {
  let component: OrderdetailComponent;
  let fixture: ComponentFixture<OrderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
