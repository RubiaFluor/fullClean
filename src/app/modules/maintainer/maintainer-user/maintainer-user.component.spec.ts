import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerUserComponent } from './maintainer-user.component';

describe('MaintainerUserComponent', () => {
  let component: MaintainerUserComponent;
  let fixture: ComponentFixture<MaintainerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
