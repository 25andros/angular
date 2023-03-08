import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrappinComponent } from './strappin.component';

describe('StrappinComponent', () => {
  let component: StrappinComponent;
  let fixture: ComponentFixture<StrappinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrappinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrappinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
