import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeCardComponent } from './emloyee-card.component';

describe('EmloyeeCardComponent', () => {
  let component: EmloyeeCardComponent;
  let fixture: ComponentFixture<EmloyeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmloyeeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmloyeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
