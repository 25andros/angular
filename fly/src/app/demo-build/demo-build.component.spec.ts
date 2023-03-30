import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBuildComponent } from './demo-build.component';

describe('DemoBuildComponent', () => {
  let component: DemoBuildComponent;
  let fixture: ComponentFixture<DemoBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
