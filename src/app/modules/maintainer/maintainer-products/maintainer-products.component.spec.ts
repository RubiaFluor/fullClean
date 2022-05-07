import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerProductsComponent } from './maintainer-products.component';

describe('MaintainerProductsComponent', () => {
  let component: MaintainerProductsComponent;
  let fixture: ComponentFixture<MaintainerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainerProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
