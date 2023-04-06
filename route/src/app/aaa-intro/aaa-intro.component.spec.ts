import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaIntroComponent } from './aaa-intro.component';

describe('AaaIntroComponent', () => {
  let component: AaaIntroComponent;
  let fixture: ComponentFixture<AaaIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaaIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaaIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
