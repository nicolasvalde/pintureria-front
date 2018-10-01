import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNotesDetailsComponent } from './order-notes-details.component';

describe('OrderNotesDetailsComponent', () => {
  let component: OrderNotesDetailsComponent;
  let fixture: ComponentFixture<OrderNotesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNotesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
