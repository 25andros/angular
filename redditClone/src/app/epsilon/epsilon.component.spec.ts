import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsilonComponent } from './epsilon.component';

describe('EpsilonComponent', () => {
  let component: EpsilonComponent;
  let fixture: ComponentFixture<EpsilonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsilonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpsilonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
