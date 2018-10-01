import { TestBed, inject } from '@angular/core/testing';

import { OrderNotesDetailsService } from './order-notes-details.service';

describe('OrderNotesDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderNotesDetailsService]
    });
  });

  it('should be created', inject([OrderNotesDetailsService], (service: OrderNotesDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
