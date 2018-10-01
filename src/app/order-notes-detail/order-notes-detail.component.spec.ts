import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNotesDetailComponent } from './order-notes-detail.component';

describe('OrderNotesDetailComponent', () => {
  let component: OrderNotesDetailComponent;
  let fixture: ComponentFixture<OrderNotesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNotesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNotesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
