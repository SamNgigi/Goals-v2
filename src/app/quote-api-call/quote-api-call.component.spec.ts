import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteApiCallComponent } from './quote-api-call.component';

describe('QuoteApiCallComponent', () => {
  let component: QuoteApiCallComponent;
  let fixture: ComponentFixture<QuoteApiCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteApiCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
