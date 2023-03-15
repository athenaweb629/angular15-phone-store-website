import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhoneComponent } from './add-phone.component';

describe('AddPhoneComponent', () => {
  let component: AddPhoneComponent;
  let fixture: ComponentFixture<AddPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
