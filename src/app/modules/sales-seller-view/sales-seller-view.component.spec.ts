import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSellerViewComponent } from './sales-seller-view.component';

describe('SalesSellerViewComponent', () => {
  let component: SalesSellerViewComponent;
  let fixture: ComponentFixture<SalesSellerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesSellerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSellerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
