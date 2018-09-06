import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonesComponent } from './telephones.component';

describe('TelephonesComponent', () => {
  let component: TelephonesComponent;
  let fixture: ComponentFixture<TelephonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
