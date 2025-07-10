import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFitComponent } from './smart-fit.component';

describe('SmartFitComponent', () => {
  let component: SmartFitComponent;
  let fixture: ComponentFixture<SmartFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartFitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
